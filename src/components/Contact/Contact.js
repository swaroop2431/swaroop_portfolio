import React, { useRef } from 'react'
import './Contact.css'
import Walmart from "../../assets/walmart.png"
import Adobe from "../../assets/adobe.png"
import Microsoft from "../../assets/microsoft.png"
import Facebook from "../../assets/facebook.png"

import FacebookIcon from "../../assets/facebook-icon.png"
import LinkedInIcon from "../../assets/linkedin.png"
import InstagramIcon from "../../assets/instagram.png"
import GitHubIcon from "../../assets/github.png"

import emailjs from '@emailjs/browser'



function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rp3okwj', 'template_m85957t', form.current, 'LG59KNW-KJbafhgFv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contactPage'>
      <div id="clients">
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='clientDesc'>I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with includes</p>
        <div className="clientImgs">
            <img src={Walmart} alt="Walmart" className="clientImg" />
            <img src={Adobe} alt="Adobe" className="clientImg" />
            <img src={Microsoft} alt="Microsoft" className="clientImg" />
            <img src={Facebook} alt="Facebook" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" className='name' placeholder='Your Name' name='from_name'/>
            <input type="email" className='email' placeholder='Your Email' name='from_email'/>
            <textarea name="message" rows="5" placeholder='Your Message' className='msg'></textarea>
            <button type='submit' value="Send" className="submitBtn"  onClick={()=>alert("Message sent Successfully")}>Send</button>
            <div className="links">
              <a href="https://www.facebook.com/sai.swaroop.12177276?mibextid=ZbWKwL"><img src={FacebookIcon} alt="Facebook" className='link'/></a>
              <a href="https://instagram.com/tipparthi_swaroop?igshid=NzZlODBkYWE4Ng=="><img src={InstagramIcon} alt="Instagram" className='link'/></a>
              <a href="https://www.linkedin.com/in/tswarooprs"><img src={LinkedInIcon} alt="LinkedIn" className='link'/></a>
              <a href="https://github.com/swaroop2431"><img src={GitHubIcon} alt="GitHub" className='link'/></a>
            </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
