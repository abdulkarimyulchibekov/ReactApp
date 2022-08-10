import search from '../../assets/Images/search.svg';
import notification from '../../assets/Images/notification.svg';
import photo from '../../assets/Images/photo.svg';
import './overview.scss';
import Item from '../Item/Item';
import Box from '../Box/Box';
import Tickets from '../Tickets/Tickets';
import Tasks from '../Tasks/Tasks';

export function Overview() {
	return (
		<div className='nimadir'>
			<div className='header'>
				<p className='header__text'>Overview</p>
				<div className='header__box'>
					<img className='header__search' src={search} alt='' />
					<img src={notification} alt='' className='header__new' />
					<div className='header__line'></div>
					<div className='header__user'>
						<p className='header__desc'>Jones Ferdinand</p>
						<img src={photo} alt='' className='header__img' />
					</div>
				</div>
			</div>
			<ul className='main-list'>
				<Item text='Unresolved' number='60' />
				<Item text='Overdue' number='16' />
				<Item text='Open' number='43' />
				<Item text='On hold' number='64' />
			</ul>
			<Box />
			<div className='site-bottom'>
				<Tickets />
				<Tasks />
			</div>
		</div>
	);
}
