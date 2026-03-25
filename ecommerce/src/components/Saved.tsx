import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface SavedProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}

const initialSavedItems: SavedProduct[] = [
  {
    id: 1,
    name: 'Modern Lounge Chair',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200',
  },
  {
    id: 2,
    name: 'Walnut Coffee Table',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=200',
  },
  {
    id: 3,
    name: 'Ceramic Vase Set',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=200',
  },
  {
    id: 4,
    name: 'Floor Lamp Brass',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200',
  },
];

export default function SavedProducts() {
  const [savedItems, setSavedItems] = useState<SavedProduct[]>(initialSavedItems);
  const [message, setMessage] = useState<string | null>(null);

  const removeItem = (id: number) => {
    setSavedItems((prev) => prev.filter((item) => item.id !== id));
    setMessage('Item removed from saved products.');
    setTimeout(() => setMessage(null), 2000);
  };

  const moveToCart = (id: number) => {
     setSavedItems((prev) => prev.filter((item) => item.id !== id));
    setMessage('Item moved to cart!');
    setTimeout(() => setMessage(null), 2000);
  };

  const moveAllToCart = () => {
    if (savedItems.length === 0) return;
    
    setSavedItems([]);
    setMessage('All items moved to cart!');
    setTimeout(() => setMessage(null), 2000);
  };

  const totalSavedValue = savedItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Header />

      <div className="PageHero bger1">
        <h2 className="PHSize mb-4">Saved Products</h2>
        <p className="PSizeText">Items you love, ready when you are</p>
      </div>

      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold mb-8">Your Wishlist</h1>

        {message && (
          <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
            {message}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
         
          <div className="lg:w-2/3 space-y-6">
            {savedItems.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
                <i className="fas fa-heart text-5xl text-gray-300 mb-4"></i>
                <p className="text-gray-500 text-lg mb-4">
                  Your saved products list is empty.
                </p>
                <Link
                  to="/shop"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              savedItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-2xl shadow-lg flex gap-6 items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-primary font-bold text-lg mt-1">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 transition" aria-label="Remove from saved">
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                    <div className="flex gap-3 mt-4">
                    
                      <button onClick={() => moveToCart(item.id)} className="pclqbtnqAdd">
                        Add to Cart
                      </button>
                      
                      <Link to={`/product/${item.id}`} className="pclqbtnqCRT">
                        View Details
                      </Link>
                      
                      
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

     
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-2xl shadow-lg sticky top-24">
              <h2 className="font-serif text-2xl font-bold mb-6">
                Saved Summary
              </h2>

              {savedItems.length > 0 ? (
                <>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Items saved</span>
                      <span>{savedItems.length}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Total value</span>
                      <span>${totalSavedValue.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Ready to buy?</span>
                        <span className="text-primary">${totalSavedValue.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={moveAllToCart}
                    className="block w-full bg-primary text-white text-center py-4 rounded-lg font-bold hover:bg-opacity-90 transition mb-4"
                  >
                    Add All to Cart
                  </button>
                </>
              ) : (
                <p className="text-gray-500 text-center py-6">
                  No items to summarize.
                </p>
              )}

              <div className="flex items-center justify-center gap-4 text-2xl text-gray-400 mb-4">
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard"></i>
                <i className="fab fa-cc-amex"></i>
                <i className="fab fa-paypal"></i>
              </div>

              <div className="text-center">
                <Link
                  to="/shop"
                  className="text-primary hover:underline text-sm"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
