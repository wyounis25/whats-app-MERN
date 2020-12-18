import './App.css';
import SideBar from './SideBar';
import Chat from './Chat'

function App() {
	return (
		<div className="App">
			<div className="App__body">
				<SideBar />
				<Chat />
			</div>
		</div>
	);
}

export default App;
