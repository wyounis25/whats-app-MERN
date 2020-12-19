// IMPORTING
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Pusher from 'pusher'
import Cors from 'cors'
//APP CONFIG
const app = express()
const port = process.env.PORT || 9000


const pusher = new Pusher({
    appId: "1125887",
    key: "b72d6d6b0952202f5d86",
    secret: "0c26fc4256c49616a574",
    cluster: "us2",
    useTLS: true
  });
  

//MIDDLEWARE
app.use(express.json())
app.use(Cors())
app.use((req,res, next) => {
    res.setHeader("Access-Controll-Allow-Origin", "*")
    res.setHeader("Access-Controll-Allow-Header", "*")
    next()
})

//DB CONFIG
const connection_url = "mongodb+srv://admin:sEWXAebVQvfSJMEE@cluster0.r4ptb.mongodb.net/whatsappdb?retryWrites=true&w=majority"
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.once('open' , () => {
    console.log("db connected")

    const msgCollection = db.collection("messagecontents")
    const changeStream = msgCollection.watch()

    changeStream.on('change', (change) => {
        console.log("Walid",change)
        if(change.operationType === 'insert') {
            const messageDetails = change.fullDocument
            pusher.trigger('messages', 'inserted',{
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            })
        } else {
            console.log("error")
        }
    })

})



//API ROUTES
app.get('/', (req,res) => res.status(200).send('hello'))

app.post('/messages/new', (req,res) => {
    const dbMessage = req.body
    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/messages/sync', (req, res) => {
    Messages.find((err,data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

//LISTEN
app.listen(port, () => console.log(`listen on localhost: ${port}`))