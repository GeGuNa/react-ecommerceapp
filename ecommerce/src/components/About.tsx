import { useState } from 'react'
import { Link } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'


export default function AboutUs() {
 


return (<>
	<Header />


<div className="bgzq text-white py-16">
            <div className="absolute  bgcqlweqblckq flex items-center justify-center">
            
            <div className="text-center text-white px-4">
                <h1 className="bgzqq1">Our Story</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">Crafting exceptional furniture for exceptional homes since 2010</p>  </div>
                
                
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


<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
         <i className="fas fa-leaf text-4xl text-primary mb-4"></i>
         <h3 className="font-serif text-xl font-bold mb-2">Sustainability</h3>
         <p className="text-gray-600">100% sustainably sourced wood and eco-friendly materials</p>
      </div>
      <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
         <i className="fas fa-hands text-4xl text-primary mb-4"></i>
         <h3 className="font-serif text-xl font-bold mb-2">Craftsmanship</h3>
         <p className="text-gray-600">Handcrafted by skilled artisans with attention to every detail</p>
      </div>
      <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
         <i className="fas fa-heart text-4xl text-primary mb-4"></i>
         <h3 className="font-serif text-xl font-bold mb-2">Community</h3>
         <p className="text-gray-600">Supporting local communities and fair labor practices</p>
      </div>
</div>



<h2 className="font-serif text-4xl font-bold text-center mb-12">Meet Our Team</h2>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 bg-gray-200">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="font-serif text-xl font-bold">Michael Chen</h3>
                    <p className="text-primary">Founder &amp; CEO</p>
                </div>
                <div className="text-center">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 bg-gray-200">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="font-serif text-xl font-bold">Sarah Johnson</h3>
                    <p className="text-primary">Head of Design</p>
                </div>
                <div className="text-center">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 bg-gray-200">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="font-serif text-xl font-bold">David Park</h3>
                    <p className="text-primary">Master Craftsman</p>
                </div>
                <div className="text-center">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 bg-gray-200">
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="font-serif text-xl font-bold">Emma Wilson</h3>
                    <p className="text-primary">Sustainability Director</p>
                </div>
            </div>


</div>

</section>


<Footer />
</>)
}
