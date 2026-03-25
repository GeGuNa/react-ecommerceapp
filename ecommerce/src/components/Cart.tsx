import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


interface Products {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}


const initialCartItems: Products[] = [
  {
    id: 1,
    name: 'Modern Lounge Chair',
    price: 299.99,
    quantity: 1,
    image: 'https://placehold.co/400x400?text=Chair', 
  },
  {
    id: 2,
    name: 'Walnut Coffee Table',
    price: 449.99,
    quantity: 2,
    image: 'https://placehold.co/400x400?text=Table',
  },
  {
    id: 3,
    name: 'Ceramic Vase Set',
    price: 89.99,
    quantity: 1,
    image: 'https://placehold.co/400x400?text=Vase',
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

 
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };


  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };


  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


  const shipping = subtotal > 500 ? 0 : 15.0;
  const tax = subtotal * 0.08; 
  const total = subtotal + shipping + tax;

  return (
    <>
      <Header />
     
     
<div className="PageHero bger1">
	<h2 className="PHSize mb-4">Cart</h2>
	<p className="PSizeText"> To make a purchase</p>
</div>
     
     
     
  <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          
            <div className="lg:w-2/3 space-y-6">
              
                <div className="bg-white p-6 rounded-2xl shadow-lg flex gap-6">
                    <img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200" className="w-32 h-32 object-cover rounded-lg"/>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="mntsrq1 text-lg font-bold">Velvet Accent Chair</h3>
                                <p className="text-gray-600 text-sm">Emerald Green</p>
                            </div>
                            <button className="text-gray-400 hover:text-red-500 transition"><i className="fas fa-trash"></i></button>
                        </div>
                        <p className="text-primary font-bold text-lg mb-4">$899</p>
                        <div className="flex items-center gap-3">
                            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary transition">-</button>
                            <span className="w-8 text-center">1</span>
                            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary transition">+</button>
                        </div>
                    </div>
                </div>

            
                <div className="bg-white p-6 rounded-2xl shadow-lg flex gap-6">
                    <img src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=200" className="w-32 h-32 object-cover rounded-lg"/>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="mntsrq1 text-lg font-bold">Oak Dining Table</h3>
                                <p className="text-gray-600 text-sm">Natural Finish</p>
                            </div>
                            <button className="text-gray-400 hover:text-red-500 transition"><i className="fas fa-trash"></i></button>
                        </div>
                        <p className="text-primary font-bold text-lg mb-4">$1,299</p>
                        <div className="flex items-center gap-3">
                            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary transition">-</button>
                            <span className="w-8 text-center">1</span>
                            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary transition">+</button>
                        </div>
                    </div>
                </div>

              
                <div className="bg-white p-6 rounded-2xl shadow-lg flex gap-6">
                    <img src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=200" className="w-32 h-32 object-cover rounded-lg"/>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="mntsrq1 text-lg font-bold">Ceramic Table Lamp</h3>
                                <p className="text-gray-600 text-sm">Matte White</p>
                            </div>
                            <button className="text-gray-400 hover:text-red-500 transition"><i className="fas fa-trash"></i></button>
                        </div>
                        <p className="text-primary font-bold text-lg mb-4">$249</p>
                        <div className="flex items-center gap-3">
                            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary transition">-</button>
                            <span className="w-8 text-center">2</span>
                            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary transition">+</button>
                        </div>
                    </div>
                </div>
            </div>

         
            <div className="lg:w-1/3">
                <div className="bg-white p-8 rounded-2xl shadow-lg sticky top-24">
                    <h2 className="font-serif text-2xl font-bold mb-6">Order Summary</h2>
                    
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>$2,696</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Tax</span>
                            <span>$215.68</span>
                        </div>
                        <div className="border-t pt-3">
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span className="text-primary">$2,911.68</span>
                            </div>
                        </div>
                    </div>

                    <Link to="checkout.html" className="block w-full bg-primary text-white text-center py-4 rounded-lg font-bold hover:bg-opacity-90 transition mb-4">Proceed to Checkout</Link>
                    
                    <div className="flex items-center justify-center gap-4 text-2xl text-gray-400 mb-4">
                        <i className="fab fa-cc-visa"></i>
                        <i className="fab fa-cc-mastercard"></i>
                        <i className="fab fa-cc-amex"></i>
                        <i className="fab fa-paypal"></i>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-gray-500">Free shipping on orders over $500</p>
                    </div>
                </div>
            </div>
        </div>
    </div>     
     
     
     
     
     
     
     
      <Footer />
    </>
  );
}
