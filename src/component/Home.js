import React from 'react';
import Header from './Header';
import Servic from './Servic';
import logo1 from './../assets/1713343965913.jpg';
import logo2 from './../assets/1713343991941.jpg';
import logo3 from './../assets/1713344010546.jpg';
import logo4 from './../assets/1713344025739.jpg';
import Sweets from './Sweets';
import Contact from './Contact';
const Home = () => {
  return (
    <div>
      <h2><Header/></h2>
      <section id='about'>
        <div className='container cont'>
            <div className='row'>
                <div className='col-md-3'>
                    <h2>+110121</h2>
                    <p>SALAD</p>
                    <img src={logo1} alt='logo/'/>
                </div>
                <div className='col-md-3'>
                    <h2>+18852</h2>
                    <p>RICE</p>
                    <img src={logo2} alt='logo/'/>
                </div>
                <div className='col-md-3'>
                    <h2>+22569</h2>
                    <p>CHICKENS</p>
                    <img src={logo3} alt='logo/'/>
                </div>
                <div className='col-md-3'>
                    <h2>+11254</h2>
                    <p>BREAKFAST</p>
                    <img src={logo4} alt='logo/'/>
                </div>
            </div>
        </div>
      </section>
      <Servic/>
      <br/>
      <div className='alert alert-danger'>BE CERFULY FROM THE TRADDITIONAL</div>
      <br/>
      <Sweets/>
      <Contact/>
    </div>
  )
}

export default Home
