import React from 'react';
import logoo from './../assets/1713344082766.jpg';
import { Dropdown } from 'react-bootstrap';
const Header = () => {
  return (
    <div>
      <section id='home'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-lg-6'>
                    <h2>good food choices are good investments.</h2>
                    <p>we are give you the best allways and stay we are tha best allways. </p>
                    <Dropdown>
  <Dropdown.Toggle variant="danger" id="dropdown-basic">
    Reed more
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">salad</Dropdown.Item>
    <Dropdown.Item href="#/action-2">yugart</Dropdown.Item>
    <Dropdown.Item href="#/action-3">sweets</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
                </div>
                <div className='col-lg-6 col-lg-6'>
                 <img src={logoo} alt='logooo'/>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Header
