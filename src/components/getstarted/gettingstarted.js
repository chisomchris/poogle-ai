import React from 'react'
import "aos/dist/aos.css"
import './gettingstarted.css'

function gettingstarted() {
  return ( 
        <div className='main-card-div'>
           <div className='started'> 
           <h1 className='h1'> Getting Started</h1> 
           </div>

            <div className='card-div'>
                <div className='card' data-aos="fade-up">
                    <div className='card-heading'>
                        <button className='getbtn1'>01</button>
                        <h2 className='cardTitle'> Choose your wallet</h2>
                    </div>
                    <h4 className='card-writeup'>
                        A Wallet is necessary for people
                        wanting to use, trade or hold poogle
                        meme coin, you can pick...
                    </h4>
                    <button className='getbtn2'> <a href='/'> learn more</a></button>
                </div>
                <div className='card' data-aos="fade-up">
                <div className='card-heading'>
                        <button className='getbtn1'>02</button>
                        <h2  className='cardTitle'> wallet configuration</h2>
                    </div>
                    <h4 className='card-writeup'>
                        After downloading, you can configure your
                        wallets according to our..
                    </h4>

                    <button className='getbtn2'> <a href='/'> Guide</a></button>
                </div>
                <div className='card' data-aos="fade-up">
                <div className='card-heading'>
                        <button className='getbtn1'>03</button>
                        <h2  className='cardTitle'>Get some poogle coin</h2>
                    </div>
                    <h4 className='card-writeup'>
                        There's a lot of ways to get your hands on some poogle coin..
                    </h4>

                    <button className='getbtn2'> <a href='/'>Learn More</a></button>
                </div>
            </div>
        </div>
  )
}

export default gettingstarted