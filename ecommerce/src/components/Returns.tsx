import { useState } from 'react'
import { Link } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'

export default function Returns() {
 
 
interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
}


const jobs: Job[] = [
  {
    id: 1,
    title: 'Senior Furniture Designer',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Lead design initiatives for our premium furniture collections.',
  },
  {
    id: 2,
    title: 'E-commerce Marketing Manager',
    location: 'Remote',
    type: 'Full-time',
    description: 'Drive growth through digital marketing strategies.',
  },
  {
    id: 3,
    title: 'Customer Experience Specialist',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Provide exceptional support to our valued customers.',
  },
  {
    id: 4,
    title: 'Supply Chain Coordinator',
    location: 'Portland, OR',
    type: 'Full-time',
    description: 'Manage logistics for sustainable material sourcing.',
  },
];
 
 


return (<>
	<Header />
	
	
	<div className="PageHero bger1">
      	<h2 className="PHSize mb-4">Returns & Refunds</h2>
      	<p className="PSizeText">
         	Hassle-free returns within 30 days. Your satisfaction is our priority.
      	</p>
	</div>


	
	
	
	
	
<section className="section">


<div className="DvContq">






            
            
            
    <div className="mgridq">

                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl">
                        <i className="fas fa-box-open"></i>
                    </div>
                    <h3 className="font-serif text-lg font-bold mb-2">1. Initiate Return</h3>
                    <p className="text-gray-600 text-sm">Log into your account and select the order you wish to return</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl">
                        <i className="fas fa-print"></i>
                    </div>
                    <h3 className="font-serif text-lg font-bold mb-2">2. Print Label</h3>
                    <p className="text-gray-600 text-sm">Download and print your prepaid return shipping label</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl">
                        <i className="fas fa-shipping-fast"></i>
                    </div>
                    <h3 className="font-serif text-lg font-bold mb-2">3. Ship Item</h3>
                    <p className="text-gray-600 text-sm">Package the item securely and drop it off at any authorized location</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl">
                        <i className="fas fa-undo"></i>
                    </div>
                    <h3 className="font-serif text-lg font-bold mb-2">4. Get Refunded</h3>
                    <p className="text-gray-600 text-sm">Receive your refund within 5-7 business days after we receive the item</p>
                </div>
            </div>     
            
            
            


<div className="lg:col-span-2 space-y-8  mt-20">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="mb-6">Return Policy</h3>
                        <div className="space-y-4 text-gray-700">
                            <div className="flex gap-4">
                                <i className="fas fa-check-circle text-primary mt-1"></i>
                                <div>
                                    <h4 className="font-bold mb-1">30-Day Return Window</h4>
                                    <p className="text-gray-600">Items must be returned within 30 days of delivery date.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <i className="fas fa-check-circle text-primary mt-1"></i>
                                <div>
                                    <h4 className="font-bold mb-1">Original Condition</h4>
                                    <p className="text-gray-600">Items must be unused, undamaged, and in original packaging with all tags attached.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <i className="fas fa-check-circle text-primary mt-1"></i>
                                <div>
                                    <h4 className="font-bold mb-1">Free Returns</h4>
                                    <p className="text-gray-600">We provide prepaid shipping labels for all eligible returns within the continental US.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <i className="fas fa-times-circle text-red-500 mt-1"></i>
                                <div>
                                    <h4 className="font-bold mb-1">Non-Returnable Items</h4>
                                    <p className="text-gray-600">Custom orders, final sale items, and gift cards cannot be returned.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="mb-6">Refund Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border-l-4 border-primary pl-4">
                                <h4 className="font-bold mb-2">Refund Method</h4>
                                <p className="text-gray-600 text-sm">Refunds will be issued to the original payment method. Store credit available upon request.</p>
                            </div>
                            <div className="border-l-4 border-primary pl-4">
                                <h4 className="font-bold mb-2">Processing Time</h4>
                                <p className="text-gray-600 text-sm">Once received, please allow 5-7 business days for your return to be processed.</p>
                            </div>
                            <div className="border-l-4 border-primary pl-4">
                                <h4 className="font-bold mb-2">Shipping Costs</h4>
                                <p className="text-gray-600 text-sm">Original shipping fees are non-refundable unless the return is due to our error.</p>
                            </div>
                            <div className="border-l-4 border-primary pl-4">
                                <h4 className="font-bold mb-2">Damaged Items</h4>
                                <p className="text-gray-600 text-sm">If your item arrives damaged, please contact us within 48 hours for a full replacement.</p>
                            </div>
                        </div>
                    </div>
                </div>







<div className="space-y-6 mt-12">
                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                        <h3 className="mb-2">Ready to Start a Return?</h3>
                        <p className="text-gray-600 mb-6">Access your order history to initiate a return.</p>
                        <Link to="order-history" class="block w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition mb-3 btqnblckq">View Orders</Link>
                        <Link to="/signin" className="block w-full border border-gray-300 py-3 rounded-lg font-medium hover:border-primary hover:text-primary transition btqnblckqzrqq">Sign In</Link>
                    </div>

                    <div className="bgsecz rounded-2xl p-8">
                        <h3 className="mb-4">Need Help?</h3>
                        <p className="text-gray-700 text-sm mb-4">Our customer service team is available to assist with your return.</p>
                        <div className="space-y-2 text-sm">
                            <p><i className="fas fa-phone text-primary mr-2"></i> +1 (555) 123-4567</p>
                            <p><i className="fas fa-envelope text-primary mr-2"></i> returns@admin.com</p>
                            <p><i className="fas fa-clock text-primary mr-2"></i> Mon-Fri: 9AM - 6PM EST</p>
                        </div>
                    </div>
                </div>















       </div>





</section>



<Footer />
</>)
}
