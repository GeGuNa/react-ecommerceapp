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

  return (
    <>
      <Header />

      <div className="PageHero bger1">
        <h2 className="PHSize mb-4">Join Our Team</h2>
        <p className="PSizeText">Help us create beautiful spaces for people around the world</p>
      </div>

      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold mb-4">Careers at Ecmrc</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for design and sustainability. Join us in creating beautiful spaces for people around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Health & Wellness</h3>
            <p className="text-gray-600">Comprehensive health insurance and wellness programs</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Growth Opportunities</h3>
            <p className="text-gray-600">Professional development and career advancement</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Work-Life Balance</h3>
            <p className="text-gray-600">Flexible schedules and generous PTO</p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold mb-4">Open Positions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find your perfect role and help us shape the future of home design.</p>
        </div>

        <div className="space-y-4 mb-16">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-center md:text-left">
                <h3 className="font-serif text-xl font-bold mb-1">{job.title}</h3>
                <p className="text-gray-500 text-sm mb-2 flex items-center justify-center md:justify-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location} 
                  <span className="text-gray-300">|</span> 
                  {job.type}
                </p>
                <p className="text-gray-600">{job.description}</p>
              </div>
              <button className="px-6 py-3 btn21 text-white rounded-full font-medium hover:bg-opacity-90 transition whitespace-nowrap shadow-md hover:shadow-lg">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4">
            Benefits & Perks
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Competitive salaries, health insurance, flexible remote work options, 
            professional development budget, and quarterly team retreats.
          </p>
          <p className="text-gray-500 text-sm">
            Don't see a role that fits? Send your resume to <a href="mailto:careers@aba.com" className="text-primary font-medium hover:underline">careers@aba.com</a>
          </p>
        </div>

      </div>

      <Footer />
    </>
  )
}
