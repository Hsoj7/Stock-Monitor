import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <img id='stock_background' src='./images/stock_background.jpg' alt='stock background'/> */}
      <h1>Stocker</h1>
      <p>Your Personalized Portfolio Tracker</p>
      <div><br/><br/></div>

      <div>
        <form>
          <label>
            <input type='text' placeholder='Email' size='30' style={{ fontSize:25, padding:5}}/>
          </label>
        </form>
      </div>

      <div><br/></div>

      <div>
        <form>
          <label>
            <input type='text' placeholder='Password' size='30' style={{ fontSize:25, padding:5}}/>
          </label>
        </form>
      </div>

      <div><br/></div>

      <div>
        <Link to='/portfolio'>
          <button id='loginBtn'>Login</button>
        </Link>
        
      </div>

    </div>
  );
}

export default HeroSection;
