import React from 'react'

const Contact = () => {
  return (
    <div>
      <section id='contact'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <h2>THAT WAS ALL OUR BEAUTIFUI RESTURANT.<br/> WE HOPE YOU LIKED IT.</h2>
                    <p>TO CONTACT US YOU CAN DO SO BY IN OR VIA THE FOLLOWING LINKS.</p>
                    <br/><br/>
                </div>
                <div className='col-md-6'>
                <form>
                        <input type='text' placeholder='user name' required/>
                        <input type='email' placeholder='your email' required/>
                        <input type='number' placeholder='your phone number' required/>
                        <input id='btn' type='submit'/>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
