import React, { useState } from 'react';
import './Chat.css';
import { Avatar } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import IconButton from '@material-ui/core/IconButton';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import axios from 'axios';

function Chat({ messages }) {
	const [ input, setinput ] = useState('');

	const sendMessage = (e) => {
		e.preventDefault();
		 axios.post('http://localhost:9000/messages/new', {
			message: input,
			name: 'Walid',
			timestamp: new Date().toUTCString(),
			received: true
		});
		setinput('')
	};
	return (
		<div className="chat">
			<div className="chat__header">
				<Avatar />

				<div className="chat__headerInfo">
					<h3>Room name</h3>
					<p> Last seen at...</p>
				</div>

				<div className="chat__headerRight">
					<IconButton>
						<SearchOutlinedIcon />
					</IconButton>
					<IconButton>
						<AttachFileIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className="chat__body">
				{messages.map((message) => (
					<p className={`chat__message ${message.received && 'chat__received'}`}>
						<span className="chat__name">{message.name}</span>
						{message.message}
						<span className="chat__timestamp">{message.timestamp}</span>
					</p>
				))}
			</div>

			<div className="chat__footer">
				<EmojiEmotionsOutlinedIcon />
				<form>
					<input
						placeholder="Type a message"
						type="text"
						value={input}
						onChange={(e) => setinput(e.target.value)}
					/>

					<button onClick={sendMessage} type="submit">
						Send a Message
					</button>
					<MicOutlinedIcon />
				</form>
			</div>
		</div>
	);
}

export default Chat;
