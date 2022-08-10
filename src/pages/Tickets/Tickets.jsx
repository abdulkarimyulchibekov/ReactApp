import React from 'react';
import search from '../../assets/Images/search.svg';
import notification from '../../assets/Images/notification.svg';
import photo from '../../assets/Images/photo.svg';
import MainTop from '../../components/MainTop/MainTop';


function Tickets() {
	return (
		<div className='main-div'>
			<div className='header'>
				<p className='header__text'>Tickets</p>
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

			<main className='main'>
				<MainTop />
			</main>
		</div>
	);
}

export default Tickets;
