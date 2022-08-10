import React from 'react';
import './mainitem.scss';

function MainItem({ img, text1, desc1, text2, desc2, text3, desc3, button }) {
  console.log(text1);
	return (
		<li className='main__item'>
			<div className='box10'>
				<img className='box1__img' src={img} alt='' />
				<div className='box1__box'>
					<p style={{ width: 372 }} className='box__text'>
						{text1}
					</p>
					<p className='box__desc'>{desc1}</p>
				</div>
			</div>

			<div className='box2'>
				<p style={{ width: 208 }} className='box__text'>
					{text2}
				</p>
				<p className='box__desc'>{desc2}</p>
			</div>

			<div className='box2'>
				<p style={{ width: 140 }} className='box__text'>
					{text3}
				</p>
				<p className='box__desc'>{desc3}</p>
			</div>

			<div className='box4'>
				<button className={button}>{button}</button>
				<div className='box4__box'>
					<div className='box4__circle'></div>
					<div className='box4__circle'></div>
					<div className='box4__circle'></div>
				</div>
			</div>
		</li>
	);
}

export default MainItem;
