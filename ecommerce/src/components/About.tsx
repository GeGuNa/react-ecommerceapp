import { Link } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'

export default function AboutUs() {
  return (
    <>
      <Header />

      <div className="PageHero bger1">
        <h2 className="PHSize mb-4">Our Story</h2>
        <p className="PSizeText">Crafting exceptional furniture for exceptional homes since 2010</p>
      </div>

      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80" 
              alt="Office" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">Designed for Living</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At Ecmrc, we believe that furniture should be more than just functional—it should tell a story. Founded in 2010, we set out to create pieces that blend timeless design with modern sustainability.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every piece in our collection is crafted with care, using responsibly sourced materials and traditional techniques passed down through generations of artisans.
            </p>
            <Link to="/contact" className="btn">Get in Touch</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Sustainability</h3>
            <p className="text-gray-600">100% sustainably sourced wood and eco-friendly materials</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Craftsmanship</h3>
            <p className="text-gray-600">Handcrafted by skilled artisans with attention to every detail</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Community</h3>
            <p className="text-gray-600">Supporting local communities and fair labor practices</p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">The passionate people behind your favorite furniture pieces.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="group text-center">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 bg-gray-200 shadow-lg ring-4 ring-transparent group-hover:ring-primary transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Michael Chen"/>
            </div>
            <h3 className="font-serif text-xl font-bold">Michael Chen</h3>
            <p className="text-primary font-medium">Founder & CEO</p>
          </div>
          
          <div className="group text-center">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 bg-gray-200 shadow-lg ring-4 ring-transparent group-hover:ring-primary transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Sarah Johnson"/>
            </div>
            <h3 className="font-serif text-xl font-bold">Sarah Johnson</h3>
            <p className="text-primary font-medium">Head of Design</p>
          </div>
          
          <div className="group text-center">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 bg-gray-200 shadow-lg ring-4 ring-transparent group-hover:ring-primary transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="David Park"/>
            </div>
            <h3 className="font-serif text-xl font-bold">David Park</h3>
            <p className="text-primary font-medium">Master Craftsman</p>
          </div>
          
          <div className="group text-center">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 bg-gray-200 shadow-lg ring-4 ring-transparent group-hover:ring-primary transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Emma Wilson"/>
            </div>
            <h3 className="font-serif text-xl font-bold">Emma Wilson</h3>
            <p className="text-primary font-medium">Sustainability Director</p>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}
