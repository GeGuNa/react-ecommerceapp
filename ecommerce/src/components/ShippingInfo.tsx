import Header from './Header';
import Footer from './Footer';
import { Link } from "react-router-dom";


export default function ShippingInfo() {
  return (
    <>
      <Header />

      <div className="PageHero bger1">
        <h2 className="PHSize mb-4">Shipping Information</h2>
        <p className="PSizeText">Fast, reliable delivery for your home</p>
      </div>

      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <i className="fas fa-box text-3xl text-primary mb-4"></i>
            <h3 className="font-bold text-xl mb-2">Standard Shipping</h3>
            <p className="text-gray-600">5–7 business days</p>
            <p className="text-gray-500 text-sm mt-1">$9.95 or free on orders $75+</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <i className="fas fa-rocket text-3xl text-primary mb-4"></i>
            <h3 className="font-bold text-xl mb-2">Express Shipping</h3>
            <p className="text-gray-600">2–3 business days</p>
            <p className="text-gray-500 text-sm mt-1">$19.95</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <i className="fas fa-truck-fast text-3xl text-primary mb-4"></i>
            <h3 className="font-bold text-xl mb-2">Overnight Delivery</h3>
            <p className="text-gray-600">1 business day</p>
            <p className="text-gray-500 text-sm mt-1">$29.95 (order by 2pm ET)</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="font-serif text-2xl font-bold mb-4">Order processing</h2>
          <p className="text-gray-600 mb-4">
            Orders are processed within 1–2 business days. You will receive a
            shipping confirmation email with tracking information as soon as your
            order leaves our warehouse.
          </p>
          <p className="text-gray-600">
            Please note that during peak seasons (holidays, sales), processing
            times may be slightly extended. We'll keep you updated every step of
            the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <i className="fas fa-globe text-primary"></i>
              International shipping
            </h3>
            <p className="text-gray-600">
              We ship to over 40 countries worldwide. International shipping
              rates and delivery times vary by destination. Duties and taxes are
              calculated at checkout. For a full list of countries we ship to,
              please see our <a href="/international" className="text-primary hover:underline">International Shipping page</a>.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <i className="fas fa-undo-alt text-primary"></i>
              Returns & exchanges
            </h3>
            <p className="text-gray-600">
              Not completely satisfied? You can return most items within 30 days
              of delivery for a full refund. We offer free returns on all orders
              within the contiguous U.S. <a href="/returns" className="text-primary hover:underline">Learn more</a>.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">Need help with your order?</h2>
          <p className="text-gray-600 mb-6">
            Our customer service team is here to assist you with any shipping
            questions.
          </p>
          <Link
            to="/contact"
            className="btn">
            Contact Support
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
