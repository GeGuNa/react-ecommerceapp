import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: 'How do I track my order?',
    answer: 'Once your order has been shipped, you will receive a confirmation email with a tracking number. You can also track your order by logging into your account and visiting the "Order History" section.',
  },
  {
    id: 2,
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for most items. Products must be unused and in original packaging. To initiate a return, please visit our Returns Center or contact our support team.',
  },
  {
    id: 3,
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. You can see the exact shipping cost at checkout before placing your order.',
  },
  {
    id: 4,
    question: 'How can I change or cancel my order?',
    answer: 'Orders can be modified or cancelled within 1 hour of placement. Please contact our customer support immediately with your order number, and we will assist you.',
  },
  {
    id: 5,
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted.',
  },
  {
    id: 6,
    question: 'How do I apply a promo code?',
    answer: 'Promo codes can be applied at checkout in the "Order Summary" section. Simply enter your code in the "Gift card or discount code" field and click "Apply".',
  },
  {
    id: 7,
    question: 'Are your products covered by warranty?',
    answer: 'Most of our furniture and home goods come with a 1-year manufacturer warranty against defects. Please check the product page for specific warranty details.',
  },
];

export default function HelpPage() {

  const [openFaqIds, setOpenFaqIds] = useState<number[]>([]);

  const toggleFaq = (id: number) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <>
      <Header />

    
      <div className="PageHero bger1">
        <h2 className="PHSize mb-4">Help Center</h2>
        <p className="PSizeText">How can we assist you today?</p>
      </div>

      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold mb-8">Support & FAQs</h1>

        <div className="flex flex-col lg:flex-row gap-8">
         
          <div className="lg:w-2/3 space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-lg text-gray-800">
                    {item.question}
                  </span>
                  <i
                    className={`fas fa-chevron-down transition-transform duration-200 ${
                      openFaqIds.includes(item.id) ? 'rotate-180' : ''
                    }`}
                  ></i>
                </button>
                <div
                  className={`px-6 pb-6 transition-all duration-200 ${
                    openFaqIds.includes(item.id) ? 'block' : 'hidden'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed border-t pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}

            <div className="text-center pt-4">
              <p className="text-gray-500">
                Still have questions?{' '}
                <Link
                  to="/contact"
                  className="text-primary font-semibold hover:underline"
                >
                  Contact our support team
                </Link>
              </p>
            </div>
          </div>

         
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-2xl shadow-lg  top-24 space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-headset text-primary"></i>
                  <span>Get in Touch</span>
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center gap-3">
                    <i className="fas fa-envelope w-5 text-primary"></i>
                    <span>support@admin.com</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <i className="fas fa-phone-alt w-5 text-primary"></i>
                    <span>+1 (800) 123-4567</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <i className="fas fa-clock w-5 text-primary"></i>
                    <span>Mon-Fri: 9AM - 6PM EST</span>
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="pclqbtnq"
                >
                  Send a Message
                </Link>
              </div>

             
             
                 </div> 
             
             
             
        <div className="bg-white p-8 rounded-2xl shadow-lg top-24 space-y-8 gap-12 mt-12">      
             
             
      <div className="">
                <h4 className="font-bold text-lg mb-4">Quick Resources</h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/shipping-info"
                      className="text-gray-600 hover:text-primary flex items-center gap-2 transition"
                    >
                      <i className="fas fa-truck text-sm"></i>
                      <span>Shipping Information</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/returns"
                      className="text-gray-600 hover:text-primary flex items-center gap-2 transition"
                    >
                      <i className="fas fa-undo-alt text-sm"></i>
                      <span>Returns & Refunds</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/track-order"
                      className="text-gray-600 hover:text-primary flex items-center gap-2 transition"
                    >
                      <i className="fas fa-map-marker-alt text-sm"></i>
                      <span>Track Your Order</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/account"
                      className="text-gray-600 hover:text-primary flex items-center gap-2 transition"
                    >
                      <i className="fas fa-user-circle text-sm"></i>
                      <span>Account Settings</span>
                    </Link>
                  </li>
                </ul>
              </div>        
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             

              <div className="bpt-6">
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <i className="fas fa-comment-dots text-3xl text-primary mb-2"></i>
                  <p className="text-sm text-gray-600">
                    Live chat available daily from 9AM to 5PM EST.
                  </p>
                  <button className="mt-2 text-primary font-medium text-sm hover:underline">
                    Start Live Chat →
                  </button>
                </div>
              </div>

      
              <div className="pt-6">
                <div className="flex items-center justify-center gap-4 text-2xl text-gray-400">
                  <i className="fab fa-cc-visa"></i>
                  <i className="fab fa-cc-mastercard"></i>
                  <i className="fab fa-cc-amex"></i>
                  <i className="fab fa-paypal"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
