import { useState } from 'react'
import { Link } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'

export default function Careers() {
 
 
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
<section className="section">


<div className="DvContq">


	<div className="PageHero">
      	<h2 className="section-header__title">Join Our Team</h2>
      	<p className="section-header__description">
         	Help us create beautiful spaces for people around the world
      	</p>
	</div>





<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                    <i className="fas fa-heart text-4xl text-primary mb-4"></i>
                    <h3 className="font-serif text-xl font-bold mb-2">Health &amp; Wellness</h3>
                    <p className="text-gray-600">Comprehensive health insurance and wellness programs</p>
                </div>
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                    <i className="fas fa-hands text-4xl text-primary mb-4"></i>
                    <h3 className="font-serif text-xl font-bold mb-2">Growth Opportunities</h3>
                    <p className="text-gray-600">Professional development and career advancement</p>
                </div>
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                    <i className="fas fa-balance-scale text-4xl text-primary mb-4"></i>
                    <h3 className="font-serif text-xl font-bold mb-2">Work-Life Balance</h3>
                    <p className="text-gray-600">Flexible schedules and generous PTO</p>
                </div>
            </div>




<h2 className="font-serif text-3xl font-bold mb-8">Open Positions</h2>


		<div className="space-y-4">
           		
     		
     		{jobs.map((job) => (
        		<div key={job.id} className="bg-white p-6 mb-6 rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-4">
          		<div>
            		<h3 className="font-serif text-xl font-bold mb-1">{job.title}</h3>
            		<p className="text-gray-600 mb-2">
              		<i className="fas fa-map-marker-alt mr-2"></i>
              		{job.location} • {job.type}
            		</p>
            		<p className="text-gray-600">{job.description}</p>
          		</div>
          		<button className="px-6 py-3 btn21 text-white rounded-full font-medium hover:bg-opacity-90 transition whitespace-nowrap">
            		Apply Now
          		</button>
        		</div>
      		))}
		</div>
		

<div className="about-card cz3q">
            <div className="about-icon cz2q">
                <i className="fas fa-gift text-4xl text-primary mb-4"></i>
            </div>
            <h3>Benefits &amp; Perks</h3>
            <p className="cz1q text-gray-600">
                Competitive salaries, health insurance, flexible remote work options, 
                professional development budget, and quarterly team retreats.
            </p>
        </div>


            
</div>





</section>



<Footer />
</>)
}
