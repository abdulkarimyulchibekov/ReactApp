import React from 'react';
import divider from "../../assets/Images/divider.svg" 
import divider2 from "../../assets/Images/divider2.svg" 
import "./BoxBox.scss"

function BoxBox() {
	return (
		<div className='box__box'>
			<div className='box__left'>
				<p className='box__text1'>Today’s trends</p>
        <p className="box__text2">as of 25 May 2019, 09:41 PM</p>
			</div>
      <div className="box__right">
        <img className='box__img' src={divider} />
        <span className="box__text3">Today</span>
        <img className='box__img' src={divider2} />
        <span className="box__text3">Yesterday</span>
      </div>
		</div>
	);
}

export default BoxBox;
