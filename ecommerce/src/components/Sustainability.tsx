import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router'
 
export default function Sustainability() {
  return (
    <>
      <Header />

      <div className="PageHero bger1">
        <h2 className="PHSize mb-4">Sustainability</h2>
        <p className="PSizeText">Caring for our planet, one piece at a time</p>
      </div>

      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="font-serif text-4xl font-bold mb-6">
              Our commitment to the environment
            </h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              We believe that beautiful furniture should never come at the
              expense of our planet. That's why sustainability is woven into
              everything we do—from the materials we choose to the way we
              package and ship your orders.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We are proud to be a certified B Corp™, meeting the highest
              standards of social and environmental performance.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600"
              alt="Sustainable forest" className="rounded-2xl shadow-lg w-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <i className="fas fa-tree text-4xl text-primary mb-4"></i>
            <h3 className="font-bold text-xl mb-2">Responsible wood sourcing</h3>
            <p className="text-gray-600">
              All our wood is FSC®-certified, ensuring it comes from responsibly
              managed forests.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <i className="fas fa-recycle text-4xl text-primary mb-4"></i>
            <h3 className="font-bold text-xl mb-2">Recycled & recyclable</h3>
            <p className="text-gray-600">
              Our packaging is made from 100% recycled materials and is fully
              recyclable.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <i className="fas fa-box-open text-4xl text-primary mb-4"></i>
            <h3 className="font-bold text-xl mb-2">Carbon‑neutral shipping</h3>
            <p className="text-gray-600">
              We offset 100% of shipping emissions through verified carbon
              offset projects.
            </p>
          </div>
        </div>

        <div className="bg-primary/10 rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Join us on our journey</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Every purchase helps us invest in renewable energy, ethical
            manufacturing, and community programs. Together, we can create a
            more sustainable future.
          </p>
          <button className="btn">
            Learn more about our impact
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
