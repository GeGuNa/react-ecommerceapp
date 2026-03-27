import { useState } from 'react'
import { Link } from "react-router-dom";

export default function Footer() {

return (<>

<footer id="footer">
        <div className="container">
            <div className="footer-container">
            
   			 <div className="footer-col">
                    <h4>About</h4>
                    <ul>
                        <li><Link to="/OurStory">Our Story</Link></li>
                        <li><Link to="/Sustainability">Sustainability</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/">Press</Link></li>
                        <li><Link to="/Stores">Stores</Link></li>
                    </ul>
                </div>
                
 
                <div className="footer-col">
                    <h4>Help</h4>
                    <ul>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/Shipping">Shipping Info</Link></li>
                        <li><Link to="/return">Returns</Link></li>
                        <li><Link to="/">Size Guide</Link></li>
                        <li><Link to="/help">FAQ</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Shop</h4>
                    <ul>
                        <li><Link to="/">All Products</Link></li>
                        <li><Link to="/">Collections</Link></li>
                        <li><Link to="/">New Arrivals</Link></li>
                        <li><Link to="/BestSellers">Best Sellers</Link></li>
                    </ul>
                </div>
                
                
            <div className="footer-col">
            <h4>Connect</h4>
            <div className="social-icons">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
            </div>

            
            
        </div>    
                
                
                
                
                
                
            </div>
            
<div className="flex  flex-wrap justify-between flxbtopq1">            
            
            <div className="flxzqprdq">
                © 2026 Ecmrc — Modern commerce. All rights reserved.
            </div>
            
          
           <div class="pt-6">
      	 	 <div class="flex items-center gap-4 text-2xl text-gray-400">
        			<i class="fab fa-cc-visa"></i>
        			<i class="fab fa-cc-mastercard"></i>
        			<i class="fab fa-cc-amex"></i>
        			<i class="fab fa-paypal"></i>
        		</div>
       	 </div>          
 </div>           
            
            
        </div>
    </footer>

</>)


}
