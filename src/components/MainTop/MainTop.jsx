import React from 'react';
import filter from '../../assets/Images/filter.svg';
import sort from '../../assets/Images/sort.svg';
import './maintop.scss';
import main1 from '../../assets/Images/main1.svg';
import main2 from '../../assets/Images/main2.svg';
import main3 from '../../assets/Images/main3.svg';
import main4 from '../../assets/Images/main4.svg';
import main5 from '../../assets/Images/main5.svg';
import main6 from '../../assets/Images/main6.svg';
import main7 from '../../assets/Images/main7.svg';
import main8 from '../../assets/Images/main8.svg';
import MainItem from '../MainItem/MainItem';

function MainTop() {
	const arr = [
		{
			img: main1,
			text1: 'Contact Email not Linked',
			desc1: 'Updated 1 day ago',
			text2: 'Tom Cruise',
			desc2: 'on 24.05.2019',
			text3: 'May 26, 2019',
			desc3: '6:30 PM',
			button: 'High',
		},
		{
			img: main2,
			text1: 'Adding Images to Featured Posts',
			desc1: 'Updated 1 day ago',
			text2: 'Matt Damon',
			desc2: 'on 24.05.2019',
			text3: 'May 26, 2019',
			desc3: '8:00 AM',
			button: 'low',
		},
		{
			img: main3,
			text1: 'When will I be charged this month?',
			desc1: 'Updated 1 day ago',
			text2: 'Robert Downey',
			desc2: 'on 24.05.2019',
			text3: 'May 26, 2019',
			desc3: '7:30 PM',
			button: 'High',
		},
		{
			img: main4,
			text1: 'Payment not going through',
			desc1: 'Updated 2 day ago',
			text2: 'Christian Bale',
			desc2: 'on 24.05.2019',
			text3: 'May 26, 2019',
			desc3: '5:00 PM',
			button: 'Normal',
		},
		{
			img: main5,
			text1: 'Unable to add replies',
			desc1: 'Updated 2 day ago',
			text2: 'Henry Cavil',
			desc2: 'on 24.05.2019',
			text3: 'May 26, 2019',
			desc3: '4:00 PM',
			button: 'High',
		},
		{
			img: main6,
			text1: 'Downtime since last week',
			desc1: 'Updated 3 day ago',
			text2: 'Chris Evans',
			desc2: 'on 23.05.2019',
			text3: 'May 26, 2019',
			desc3: '2:00 PM',
			button: 'Normal',
		},
		{
			img: main7,
			text1: 'Referral Bonus',
			desc1: 'Updated 4 day ago',
			text2: 'Sam Smith',
			desc2: 'on 22.05.2019',
			text3: 'May 26, 2019',
			desc3: '11:30 AM',
			button: 'low',
		},
		{
			img: main8,
			text1: 'How do I change my password?',
			desc1: 'Updated 4 day ago',
			text2: 'Steve Rogers',
			desc2: 'on 21.05.2019',
			text3: 'May 26, 2019',
			desc3: '1:00 PM',
			button: 'Normal',
		},
	];
	return (
		<>
			<div className='main__top'>
				<p className='main__text'>All tickets</p>
				<img src={sort} alt='sort icon' className='main__sort' />
				<span className='main__desc desc'>Sort</span>
				<img src={filter} alt='filter icon' className='main__sort' />
				<span className='main__desc'>Filter</span>
			</div>
			<div className='main__bottom'>
				<p style={{ width: 400 }} className='main__content'>
					Ticket details
				</p>
				<p style={{ width: 208 }} className='main__content'>
					Customer name
				</p>
				<p style={{ width: 140 }} className='main__content'>
					Date
				</p>
				<p style={{ width: 104 }} className='main__content'>
					Priority
				</p>
			</div>
			<ul className='main__list'>
				{arr.map((e) => (
					<MainItem
						img={e.img}
						text1={e.text1}
						desc1={e.desc1}
						text2={e.text2}
						desc2={e.desc2}
						text3={e.text3}
						desc3={e.desc3}
						button={e.button}
					/>
				))}
			</ul>
		</>
	);
}

export default MainTop;
