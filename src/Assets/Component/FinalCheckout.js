import React from 'react'
import Star from '../Assets/star.png';
import Ticket from '../Assets/ticket.png';
import Calendar from '../Assets/calendar.png';
import Clock from '../Assets/clock.png';
import Guest from '../Assets/guest.png';
import Add from '../Assets/add.png';
import piggy from '../Assets/piggybank1.svg';


const FinalCheckout = () => {
  return (
    <div id='finalcheckout'>
      <div className='slider'>
        <p>Bestseller</p>
        <img src='https://media.cntraveler.com/photos/5a009c8e25be133d871c008e/16:9/w_2560%2Cc_limit/Mountain-Travel_GettyImages-503689316.jpg' alt="slider" />
      </div>
      <div className='ratinginfo'>
        <img src={Star} alt="rating" />
        <p>4.9 <span>(4.5k)</span> &#x2022; &lt;category&gt;</p>
      </div>
      <p className='title'>Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef</p>

      <div className='tripinfo'>
        <img src={Ticket} alt="ticket" />
        <p>&lt;ticket type - variant&gt;</p>
      </div>

      <div className='tripinfo'>
        <img src={Calendar} alt="calendar" />
        <p>&lt;day&gt;, &lt;month&gt; &lt;date&gt;</p>
      </div>
      <p className='extrainfo'>Duration:&lt;duration&gt;</p>

      <div className='tripinfo'>
        <img src={Clock} alt="clock" />
        <p>&lt;time&gt;</p>
      </div>
      <p className='extrainfo'>Operating hours: &lt;time&gt; to &lt;time&gt;</p>
      <div className='tripinfo'>
        <img src={Guest} alt="guest" />
        <p>5 guests</p>
      </div>
      <hr className='hrline' />
      <div className='paymentsum'>
        <p><u>View payment summary</u></p>
        <img src={Add} alt='plus' />
      </div>
      <hr className='hrline' />
      <div className='payableamount'>
          <p>Total payable: </p>
          <p>$XXX</p>
      </div >
      <div className='piggybox'>
        <img src={piggy} alt="" />
        <p className='saveAmt'>  You saved &lt;price&gt;</p>
      </div>
      
      <p className='aed'><u>You will be charge in AED</u></p>
      <p className='termCond'>By clicking "confirm & pay", you agree to <span>Tickete's general terms and conditions</span> and <span>cancellation policy.</span></p>
      <button className='confirmpaybtn'>Confirm & pay</button>
    </div>
  )
}

export default FinalCheckout