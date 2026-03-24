import { useState } from 'react'
import { Link } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'


export default function AboutUs() {
 


return (<>
	<Header />


<div class="bgzq text-white py-16">
            <div class="absolute  bgcqlweqblckq flex items-center justify-center">
            
            <div class="text-center text-white px-4">
                <h1 class="bgzqq1">Our Story</h1>
                <p class="text-xl text-gray-300 max-w-2xl mx-auto">Crafting exceptional furniture for exceptional homes since 2010</p>  </div>
                
                
            </div>
        </div>






<section className="section">


<div className="DvContq">


	
	

<div className="about-grid">


            <div className="relative">
                <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800=80" alt="Office"/>
            </div>
            
            
            <div className="about-text">
                <h2>Designed for Living</h2>
                <p>At Ecmrc, we believe that furniture should be more than just functional—it should tell a story. Founded in 2010, we set out to create pieces that blend timeless design with modern sustainability.

</p>
                <p>Every piece in our collection is crafted with care, using responsibly sourced materials and traditional techniques passed down through generations of artisans.

</p>
                <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
            </div>
        </div>


</div>

</section>


<Footer />
</>)
}
