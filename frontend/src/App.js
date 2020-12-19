import './App.css';
import SideBar from './SideBar';
import Chat from './Chat';
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from 'axios';

function App() {
	const [ message, setMessage ] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get('http://localhost:9000/messages/sync');
			setMessage(request.data);
			console.log(request);
		}
		fetchData();
	}, []);

	console.log(message);

	useEffect(
		() => {
			const pusher = new Pusher('b72d6d6b0952202f5d86', {
				cluster: 'us2'
			});
			const channel = pusher.subscribe('messages');
			channel.bind('inserted', (data) => {
				setMessage([ ...message, data ]);
			});

			return () => {
				channel.unbind_all();
				channel.unsubscribe();
			};
		},
		[ message ]
	);

	return (
		<div className="App">
			<div className="App__body">
				<SideBar />
				<Chat messages={message} />
			</div>
		</div>
	);
}

export default App;
