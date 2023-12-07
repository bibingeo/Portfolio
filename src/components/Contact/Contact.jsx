import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      
      <div className='contact-title'>          
            <p className='contact-head'>CONTACT</p>
            <p className='get-contact'>Get in touch or shoot me an email directly on <span className='get-email'>bibin.geo@gmail.com</span></p> 
      </div>
      
      <div className='contact-right'>         
            <div className='connect-icons'>
                <div className='soc-link'>                
                  <i class="fa-brands fa-linkedin connect-icon"></i>
                  <p className='link'>Linkedin</p>
                </div>
                <div className='soc-link'>       
                <i class="fa-brands fa-square-facebook connect-icon"></i>
                  <p className='link'>Facebook</p>
                </div>
                <div className='soc-link'>        
                  <i class="fa-brands fa-square-github connect-icon"></i>
                  <p className='link'>Github</p>
                </div>
                <div className='soc-link'>                
                <i class="fa-brands fa-square-behance connect-icon"></i>
                  <p className='link'>Behance</p>
                </div>
               
            </div>
      

      </div>
    </div>
  )
}

export default Contact
