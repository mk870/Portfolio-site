import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { ContactFormStyles } from './ContactFormStyles'
import Popup from './Popup';

const ContactForm = () => {
  const [msg, setMsg] = useState('')
  const[popup,setPopup] = useState(false)
  const [load, setLoad] = useState(false)
  useEffect(()=>{
    if(msg){
      setLoad(false)
    }
  },[msg])
  const sendEmail = (e) => {
   e.preventDefault();
   setLoad(true)
   setMsg('')
   emailjs.sendForm('service_cputlbx', 'template_9lizr75', e.target, 'Js4824BNLkQM1uyts')
     
     .then((result) => {
        
        setMsg('sent')
        setPopup(true)
     }, (error) => {
       setMsg('failed')
       setPopup(true)
     });
    e.target.reset()
  }
  return (
    <ContactFormStyles id='contact'>
      {popup && <Popup message={msg} close={setPopup}/>}
      <div className="head">
        <span>Contact Form</span>
      </div>
      <form onSubmit={sendEmail}>
        <div className="data">
        <label >Name:</label>
        <input type="text" name='name' className='input'/>
        </div>
        <div className="data">
        <label >Email:</label>
        <input type="email" name='email' className='input'/>
        </div>
        <div className="text">
        <label >Message:</label>
        <textarea type="text" name='message' className='area'/>
        </div>
        <input type="submit" value={load?"Sending...":"Send Email"} className='btn'/>
      </form>
    </ContactFormStyles>
  )
}

export default ContactForm