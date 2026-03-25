import { Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default function OurStory() {
  return (
    <>
      <Header />

      <div className="PageHero bger1">
        <h2 className="PHSize mb-4">Our Story</h2>
        <p className="PSizeText">Crafting comfort since 2015</p>
      </div>

      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="font-serif text-4xl font-bold mb-6">
              A passion for timeless design
            </h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2015 by interior designer Emma Chen, our brand was born
              from a simple idea: everyone deserves beautiful, high-quality
              furniture that lasts a lifetime. What started as a small studio in
              Brooklyn has grown into a beloved destination for modern
              craftsmanship.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every piece we create is thoughtfully designed, using sustainable
              materials and traditional techniques. We believe your home should
              be a reflection of your story—and we're honored to be a part of it.
            </p>
            <div className="mt-8">
              <Link
                to="/shop"
                className="btn">
                Explore our collection
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600"
              alt="Our workshop" className="rounded-2xl shadow-lg w-full object-cover"/>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 text-center mb-16">
          <h2 className="font-serif text-3xl font-bold mb-4">Our values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <i className="fas fa-leaf text-4xl text-primary mb-4"></i>
              <h3 className="font-bold text-xl mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Responsibly sourced materials and eco-friendly production.
              </p>
            </div>
            <div>
              <i className="fas fa-hand-sparkles text-4xl text-primary mb-4"></i>
              <h3 className="font-bold text-xl mb-2">Craftsmanship</h3>
              <p className="text-gray-600">
                Handcrafted by skilled artisans with meticulous attention.
              </p>
            </div>
            <div>
              <i className="fas fa-heart text-4xl text-primary mb-4"></i>
              <h3 className="font-bold text-xl mb-2">Community</h3>
              <p className="text-gray-600">
                Supporting local makers and giving back to our neighborhoods.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Join our journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Be the first to know about new arrivals, exclusive events, and
            behind-the-scenes stories.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="border border-gray-300 px-4 py-3 w-64 focus:outline-none inputFl"/>
            <button className="btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
