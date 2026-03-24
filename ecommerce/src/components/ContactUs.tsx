import { useState } from 'react'
import { Link } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'

export default function ContactUs() {
 


return (<>
	<Header />
<section className="section">


<div className="DvContq">


	<div className="PageHero">
      	<h2 className="section-header__title">Get in Touch</h2>
      	<p className="section-header__description">
         	Reach out to us through any of the channels below. We typically respond within 24 hours during business days.


      	</p>
	</div>

<div className="TwoBlocks">
   
   
   {/*first section*/}
			<div>
			
			<div className="contact-info">

        
        <div className="contact-methods">
          <div className="contact-method">
            <div className="contact-method-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div className="contact-method-content">
              <h3>Email Us</h3>
              <p><Link href="mailto:hello@aba.com">hello@aba.com</Link></p>
              <p><Link href="mailto:support@aba.com">support@aba.com</Link></p>
            </div>
          </div>
          
          <div className="contact-method">
            <div className="contact-method-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <div className="contact-method-content">
              <h3>Call Us</h3>
              <p><Link href="tel:+18005551234">+1 (800) 555-1234</Link></p>
              <p>Mon-Fri, 9am-6pm EST</p>
            </div>
          </div>
    
    
    
    
          <div className="contact-method">
            <div className="contact-method-icon">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>
            </div>
            <div className="contact-method-content">
              <h3>Working Hours</h3>
              <p> Monday - Friday: 9AM - 6PM</p>
              <p>Saturday: 10AM - 4PM</p>
            </div>
          </div>   

    
    
    
    
    
    
    
    
    
    
          
          <div className="contact-method">
            <div className="contact-method-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div className="contact-method-content">
              <h3>Visit Us</h3>
              <p>1234 Fashion Avenue</p>
              <p>New York, NY 10001</p>
            </div>
          </div>
          
          
        </div>
        
        <div className="social-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <Link to="/" className="social-link" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
            <Link to="/" className="social-link" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </Link>
            <Link to="/" className="social-link" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link to="/" className="social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
          </div>
        </div>
      </div>
				
			
			</div>


{/*scnd */}
<div>

<div className="contact-form-wrapper">
        <h2>Send a Message</h2>
        <p>Fill out the form below and we'll get back to you shortly.</p>
        
        <form id="contactForm">
          <div className="form-row">
            <div className="form-group">
              <label for="firstName">First Name <span>*</span></label>
              <input type="text" id="firstName" className="form-input" placeholder="John" required=""/>
            </div>
            <div className="form-group">
              <label for="lastName">Last Name <span>*</span></label>
              <input type="text" id="lastName" className="form-input" placeholder="Doe" required=""/>
            </div>
          </div>
          
          <div className="form-group">
            <label for="email">Email Address <span>*</span></label>
            <input type="email" id="email" className="form-input" placeholder="john@example.com" required=""/>
          </div>
          
          <div className="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" className="form-input" placeholder="+1 (555) 000-0000"/>
          </div>
          
          <div className="form-group">
            <label for="subject">Subject <span>*</span></label>
            <select id="subject" className="form-select" required="">
              <option value="">Select a subject</option>
              <option value="order">Order Inquiry</option>
              <option value="product">Product Question</option>
              <option value="returns">Returns &amp; Exchanges</option>
              <option value="shipping">Shipping Information</option>
              <option value="partnership">Partnership Inquiry</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label for="message">Message <span>*</span></label>
            <textarea id="message" className="form-textarea" placeholder="How can we help you?" required=""></textarea>
          </div>
          
          <button type="submit" className="form-submit">Send Message</button>
        </form>
      </div>
      
      
</div>   
      

            
</div>


</div>

</section>



<Footer />
</>)
}
