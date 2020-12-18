import React from 'react';
import './Chat.css';
import { Avatar } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import IconButton from '@material-ui/core/IconButton';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
function Chat() {
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
				<p className="chat__message">
					<span className="chat__name">Walid</span>
                    This is a message 
					<span className="chat__timestamp">{new Date().toUTCString()}</span>
				</p>
				<p className="chat__message chat__reciever">
					<span className="chat__name">Walid</span>
                    This is a message 
					<span className="chat__timestamp">{new Date().toUTCString()}</span>
				</p>
			</div>
            <div className="chat__footer">
                <EmojiEmotionsOutlinedIcon/>
                <form>
                    <input placeholder="Type a message"
                    type="text"
                    />

                  <button type="submit">
                      Send a Message
                  </button>
                  <MicOutlinedIcon/>
                </form>
            </div>
		</div>
	);
}

export default Chat;
