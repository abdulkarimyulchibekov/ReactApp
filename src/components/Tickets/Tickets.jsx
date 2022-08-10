import React from 'react';
import TicketsItem from '../TicketsItem/Ticketstem';
import "./tickets.scss"

function Tickets() {
	return (
		<div className='tickets'>
			<div className='tickets__top'>
				<div className='tickets__left'>
					<p className='tickets__header'>Unresolved tickets</p>
          <span className='tickets__och'>Group:{" "}</span>
          <span className='tickets__toq'>Support</span>
				</div>
        <p className="tickets__btn">
        View details
        </p>
			</div>

			<ul className='tickets__list'>
				<TicketsItem content={"Waiting on Feature Request"} number={"4238"}/>
				<TicketsItem content={"Awaiting Customer Response"} number={"1005"} />
				<TicketsItem content={"Awaiting Developer Fix"} number={"914"}/>
				<TicketsItem content={"Pending"}c number={"281"}/>
			</ul>
		</div>
	);
}

export default Tickets;
