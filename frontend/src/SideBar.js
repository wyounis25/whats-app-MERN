import React from 'react';
import './SideBar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SideBarChat from './SideBarChat';
import IconButton from '@material-ui/core/IconButton';


function SideBar() {
	return (
		<div className="sidebar">
			<h1>SIDEBAR</h1>
			<div className="sidebar__header">
				<div className="sidebar__headerRight">
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<MessageIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className="sidebar__search">
				<div className="sidebar__searchContainer">
					<input placeholder="Search Here" type="text" />
				</div>
			</div>
			<div className="sidebar__chats">
				<SideBarChat />
				<SideBarChat />
				<SideBarChat />
			</div>
		</div>
	);
}

export default SideBar;
