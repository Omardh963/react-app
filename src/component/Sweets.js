import React from 'react'
import img1 from './../assets/1713343914560.jpg';
import img2 from './../assets/1713343950852.jpg';
import img3 from './../assets/1713344045033.jpg';
import img4 from './../assets/1713344066161.jpg';
import img5 from './../assets/1713344082766.jpg';
import img6 from './../assets/1713344103553.jpg';
const Sweets = () => {
  return (
<>
<section id='sweets'>
<div className='container sweet'>
    <div className='rows'>
    <div className='row'>
        <div className='col-md-12'>
          <div className='rows'>
            <img src={img1} alt='img'/>
            <h2>this is biscueet and crema</h2>
            <p className='p'>the price is 500$</p>
            </div>
            <br/>
           <strong><hr/></strong> 
            <br/>
        </div>
        <div className='col-md-12'>
          <div className='rows'>
            <img src={img2} alt='img'/>
            <h2>this is cake with chocolata</h2>
            <p className='p'>the price is 700$</p>
            </div>
            <br/>
            <strong><hr/></strong> 
            <br/>
            </div>
            <div className='col-md-12'>
            <div className='rows'>
            <img src={img3} alt='img'/>
            <h2>this is milk crema</h2>
            <p className='p'>the price is 500$</p>
            </div>
            <br/>
            <strong><hr/></strong> 
            <br/>
            </div>
            <div className='col-md-12'>
            <div className='rows'>
            <img src={img4} alt='img'/>
            <h2>this is chocolata crema</h2>
            <p className='p'>the price is 400$</p>
            </div>
            <br/>
            <strong><hr/></strong> 
            <br/>
            </div>
            <div className='col-md-12'>
            <div className='rows'>
            <img src={img5} alt='img'/>
            <h2>this is fast food</h2>
            <p className='p'>the price is 900$</p>
            </div>
            <br/>
            <strong><hr/></strong> 
            <br/>
            </div>
            <div className='col-md-12'>
            <div className='rows'>
            <img src={img6} alt='img'/>
            <h2>this is sweets crema</h2>
            <p className='p'>the price is 600$</p>
            </div>
            <br/>
            <strong><hr/></strong> 
            <br/>
            </div>
       </div>
       </div>
</div>
</section>

</>
  )
}

export default Sweets
