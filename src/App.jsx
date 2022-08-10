import Sidebar from './components/SideBar/sidebar';
import { RenderRoutes } from './routes';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Test } from './components/overview/Overview';
import "./App.scss"

function App() {
	return (
		<div className='App'>
			<Sidebar />
			<RenderRoutes />
		</div>
	);
}

export default App;
