import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Overview } from '../components/overview/Overview';
import Tickets from '../pages/Tickets/Tickets';

export function RenderRoutes() {
	return (
		<Routes>
			<Route path={'/overview'} element={<Overview />} />
			<Route path={'/ticket'} element={<Tickets></Tickets>} />
		</Routes>
	);
}
