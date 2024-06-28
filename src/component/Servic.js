import React from 'react';
import img2 from './../assets/1713343950852.jpg';
import img3 from './../assets/1713344227720.jpg';
import img4 from './../assets/1713344244048.jpg';
import img5 from './../assets/1713344211744.jpg';
import img6 from './../assets/1713344082766.jpg';
const Servic=()=>{
  return (
    <>
    <section id='services'>
        <div className='container cont1'>
            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                <div className='flex'>
                <img src={img2} alt='logo'/>
                <p>Sweets</p>
                </div>
                </div>
                <div className='col-md-6 col-sm-12'>
                <div className='flex'>
                <img  src={img3} alt='logo'/>
                <p>Pizza</p>
                </div>
                </div>
                <div className='col-md-6 col-sm-12'>
                <div className='flex'>
                <img  src={img4} alt='logo'/>
                <p>chicen</p>
                </div>
                </div>
                <div className='col-md-6 col-sm-12'>
                <div className='flex'>
                <img src={img5} alt='logo'/>
                <p>chicen and salad</p>
                </div>
                </div>
                <div className='col-md-6 col-sm-12'>
                <div className='flex'>
                <img  src={img6} alt='logo'/>
                <p>breacfast</p>
                </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Servic;
