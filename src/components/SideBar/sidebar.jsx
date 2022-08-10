import { NavLink } from 'react-router-dom';
import logo from '../../assets/Images/logo.svg';
import './sidebar.scss';
import overview from '../../assets/Images/overview.svg';
import tickets from '../../assets/Images/tickets.svg';
import ideas from "../../assets/Images/ideas.svg"
import contacts from "../../assets/Images/contacts.svg"
import agents from "../../assets/Images/agents.svg"
import articles from "../../assets/Images/articles.svg"
import settings from "../../assets/Images/settings.svg"
import subscription from "../../assets/Images/subscription.svg"

function Sidebar() {
	return (
		<div className='sidebar'>
			<a className='logo' href='/'>
				<img src={logo} alt='site logo' />
			</a>

			<ul className='list'>
				<li className='item'>
					<NavLink
						className={({ isActive }) => (isActive ? 'active' : 'passive')}
						to={'/overview'}>
						<div className='item__line'></div>
						<img className='item__icon' src={overview} /> Overview
					</NavLink>
				</li>
				<li className='item'>
					<NavLink
						className={({ isActive }) => (isActive ? 'active' : 'passive')}
						to={'/ticket'}>
						<div className='item__line'></div>
						<img src={tickets} className='item__icon' /> 
						Ticket
					</NavLink>
				</li>
				<li className="item passive">
					<img src={ideas} className="item__icon" />
					Ideas
				</li>
				<li className="item passive">
					<img src={contacts} className="item__icon" />
					Contacts
				</li>
				<li className="item passive">
					<img src={agents} className="item__icon" />
					Agents
				</li>
				<li className="item passive">
					<img src={articles} className="item__icon" />
					Articles
				</li>
				<li className="list__line">
				</li>
				<li className="item passive">
					<img src={settings} className="item__icon" />
					Settings
				</li>
				<li className="item passive">
					<img src={subscription} className="item__icon" />
					Subscription
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;
