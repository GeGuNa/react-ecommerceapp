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
                        <li><Link to="/">Our Story</Link></li>
                        <li><Link to="/">Sustainability</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/">Press</Link></li>
                        <li><Link to="/">Stores</Link></li>
                    </ul>
                </div>
                
 
                <div className="footer-col">
                    <h4>Help</h4>
                    <ul>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/">Shipping Info</Link></li>
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
                        <li><Link to="/">Best Sellers</Link></li>
                    </ul>
                </div>
                
                
            <div className="footer-col">
            <h4>Connect</h4>
            <div className="social-icons">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
            </div>
            <p className="mt-3">hello@admin.com</p>
        </div>    
                
                
            </div>
            <div className="copyright">
                © 2026 Ecmrc — Modern commerce. All rights reserved.
            </div>
        </div>
    </footer>

</>)


}
