import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface Product {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  categoryName: string;
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
  soldCount: number;
  rank: number;
}

const products: Product[] = [
  { id: 1, name: 'Modern Lounge Chair', price: 299.99, categoryId: 1, categoryName: 'Living Room', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300', description: 'Comfortable lounge chair', rating: 4.8, reviewCount: 342, soldCount: 1250, rank: 1 },
  { id: 5, name: 'Upholstered Bed Frame', price: 899.99, categoryId: 2, categoryName: 'Bedroom', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300', description: 'Luxurious bed frame', rating: 4.9, reviewCount: 521, soldCount: 890, rank: 2 },
  { id: 10, name: 'Wall Mirror', price: 189.99, categoryId: 7, categoryName: 'Decor', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300', description: 'Large arched mirror', rating: 4.7, reviewCount: 289, soldCount: 1560, rank: 3 },
  { id: 16, name: 'Sectional Sofa', price: 1599.99, categoryId: 1, categoryName: 'Living Room', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300', description: 'Spacious sectional', rating: 4.6, reviewCount: 412, soldCount: 670, rank: 4 },
  { id: 17, name: 'Standing Desk', price: 549.99, categoryId: 4, categoryName: 'Home Office', image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=300', description: 'Electric standing desk', rating: 4.8, reviewCount: 378, soldCount: 920, rank: 5 },
  { id: 18, name: 'Kitchen Island Cart', price: 429.99, categoryId: 3, categoryName: 'Dining', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=300', description: 'Mobile kitchen island', rating: 4.5, reviewCount: 256, soldCount: 1100, rank: 6 },
];

const categories = [
  { id: 1, name: 'Living Room' },
  { id: 2, name: 'Bedroom' },
  { id: 3, name: 'Dining' },
  { id: 4, name: 'Home Office' },
  { id: 5, name: 'Outdoor' },
  { id: 6, name: 'Lighting' },
  { id: 7, name: 'Decor' },
  { id: 8, name: 'Storage' },
];

export default function BestSellers() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'rank' | 'sales' | 'rating'>('rank');
  const [searchQuery, setSearchQuery] = useState('');
  const [showTopOnly, setShowTopOnly] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedCategory) {
      result = result.filter(p => p.categoryId === selectedCategory);
    }

    if (minRating > 0) {
      result = result.filter(p => p.rating >= minRating);
    }

    if (showTopOnly) {
      result = result.filter(p => p.rank <= 3);
    }

    if (searchQuery.trim()) {
      const term = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(term));
    }

    if (sortBy === 'rank') return result.sort((a, b) => a.rank - b.rank);
    if (sortBy === 'sales') return result.sort((a, b) => b.soldCount - a.soldCount);
    if (sortBy === 'rating') return result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [selectedCategory, minRating, sortBy, searchQuery, showTopOnly]);

  const renderStars = (rating: number) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(star => (
        <i key={star} className={`fas fa-star ${star <= rating ? 'text-yellow-400' : 'text-gray-300'} text-sm`}></i>
      ))}
    </div>
  );

  return (
    <>
      <Header />
<div className="mrg81frhero"></div>
     
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-16">
      
      
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 ">
            <div>
              <div className="inline-block mb-3">
                <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                  🔥 Trending Now
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-2 clrBdflq3qtxtwht">Best Sellers</h1>
              <p className="text-xl opacity-90">Customer favorites that can't be missed</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-4xl font-bold">{products.length}</p>
              <p className="text-sm opacity-80">Hot Products</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8 border-2 border-orange-100 mt-8">
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex-1 min-w-64">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Search Best Sellers
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Find popular products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border-2 border-orange-200 rounded-xl focus:outline-none focus:border-orange-500"/>
                <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-orange-400"></i>
              </div>
            </div>

            <div className="w-48">
              <label className="block text-sm font-bold text-gray-700 mb-2"> Min Rating</label>
              <select
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
                className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:outline-none focus:border-orange-500">
                <option value={0}>Any Rating</option>
                <option value={4}>4+ Stars</option>
                <option value={4.5}>4.5+ Stars</option>
                <option value={5}>5 Stars</option>
              </select>
            </div>

            <div className="w-48">
              <label className="block text-sm font-bold text-gray-700 mb-2"> Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:outline-none focus:border-orange-500">
                <option value="rank">Top Ranked</option>
                <option value="sales">Most Sold</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <label className="flex items-center gap-2 cursor-pointer bg-orange-50 px-4 py-3 rounded-xl">
              <input type="checkbox" checked={showTopOnly} onChange={(e) => setShowTopOnly(e.target.checked)} className="w-5 h-5" />
              <span className="font-semibold text-orange-700">Top 3 Only</span>
            </label>
          </div>

         
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-medium transition ${!selectedCategory ? 'bg-orange-500 text-white' : 'bg-gray-100 hover:bg-orange-100'}`}>
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-medium transition ${selectedCategory === cat.id ? 'bg-orange-500 text-white' : 'bg-gray-100 hover:bg-orange-100'}`}>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

      
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <i className="fas fa-trophy text-6xl text-gray-300 mb-4"></i>
            <h3 className="text-xl font-bold text-gray-700">No products found</h3>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product, index) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col md:flex-row mrbtsqq">
              
          

               
                <div className="w-full md:w-48 h-48 md:h-auto flex-shrink-0">
                  <img src={product.image} alt={product.name} className="productcard__image2" />
                </div>

              
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-xs text-orange-600 font-semibold uppercase">{product.categoryName}</span>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition">{product.name}</h3>
                    </div>
                    <span className="text-orange-600 font-bold text-2xl">${product.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      {renderStars(product.rating)}
                      <span className="text-sm text-gray-500">({product.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full font-medium">
                        <i className="fas fa-shopping-cart mr-1"></i>
                        {product.soldCount.toLocaleString()} sold
                      </span>
                      <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">
                        <i className="fas fa-check mr-1"></i>
                        In Stock
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

       
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 mrbtsqq">
          {[
            { icon: 'fa-shield-alt', text: 'Verified Quality', color: 'blue' },
            { icon: 'fa-truck', text: 'Fast Shipping', color: 'green' },
            { icon: 'fa-undo', text: 'Easy Returns', color: 'orange' },
            { icon: 'fa-headset', text: '24/7 Support', color: 'purple' },
          ].map((badge, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-4 text-center">
              <i className={`fas ${badge.icon} text-3xl text-${badge.color}-500 mb-2`}></i>
              <p className="font-semibold text-gray-700">{badge.text}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
