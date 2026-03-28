import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
  productCount: number;
  icon: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  collectionId: string;
  image: string;
  description: string;
}

const collections: Collection[] = [
  { id: 'modern', name: 'Modern', description: 'Clean lines & minimalist design', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500', color: 'from-blue-500 to-cyan-500', productCount: 24, icon: 'fa-gem' },
  { id: 'natural', name: 'Natural', description: 'Organic materials & earth tones', image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500', color: 'from-green-500 to-emerald-500', productCount: 18, icon: 'fa-leaf' },
  { id: 'luxury', name: 'Luxury', description: 'Premium materials & elegance', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500', color: 'from-purple-500 to-pink-500', productCount: 15, icon: 'fa-crown' },
  { id: 'industrial', name: 'Industrial', description: 'Raw metals & urban style', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500', color: 'from-gray-600 to-gray-800', productCount: 12, icon: 'fa-industry' },
  { id: 'scandinavian', name: 'Scandinavian', description: 'Simple & functional beauty', image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=500', color: 'from-orange-400 to-amber-500', productCount: 20, icon: 'fa-home' },
  { id: 'bohemian', name: 'Bohemian', description: 'Free-spirited & eclectic', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500', color: 'from-red-400 to-rose-500', productCount: 16, icon: 'fa-palette' },
];

const products: Product[] = [
  { id: 1, name: 'Modern Lounge Chair', price: 299.99, collectionId: 'modern', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300', description: 'Minimalist lounge chair' },
  { id: 2, name: 'Walnut Coffee Table', price: 449.99, collectionId: 'natural', image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=300', description: 'Natural wood table' },
  { id: 3, name: 'Ceramic Vase Set', price: 89.99, collectionId: 'bohemian', image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=300', description: 'Handcrafted vases' },
  { id: 4, name: 'Floor Lamp Brass', price: 159.99, collectionId: 'luxury', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300', description: 'Elegant brass lamp' },
  { id: 5, name: 'Upholstered Bed Frame', price: 899.99, collectionId: 'luxury', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300', description: 'Velvet bed frame' },
  { id: 6, name: 'Dining Table', price: 1299.99, collectionId: 'scandinavian', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=300', description: 'Simple dining table' },
  { id: 7, name: 'Office Chair', price: 349.99, collectionId: 'industrial', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300', description: 'Metal frame chair' },
  { id: 8, name: 'Pendant Light', price: 129.99, collectionId: 'modern', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300', description: 'Glass pendant' },
];

export default function Collections() {
  const [selectedCollection, setSelectedCollection] = useState<string | null>('modern');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [keywordFilter, setKeywordFilter] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');

  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedCollection) {
      result = result.filter(p => p.collectionId === selectedCollection);
    }

    if (keywordFilter.trim()) {
      const term = keywordFilter.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(term));
    }

    if (priceMin) {
      result = result.filter(p => p.price >= parseFloat(priceMin));
    }

    if (priceMax) {
      result = result.filter(p => p.price <= parseFloat(priceMax));
    }

    return result;
  }, [selectedCollection, keywordFilter, priceMin, priceMax]);

  const selectedCollectionData = collections.find(c => c.id === selectedCollection);

  return (
    <>
      <Header />

      
<div class="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 mrg81frhero"><div class="container mx-auto px-4 text-center">

<h1 class="text-4xl md:text-5xl font-bold mb-4 clrBdflq3qtxtwht">Collections</h1>
<p class="text-xl text-gray-300 mb-6">Curated styles for every taste. Find your perfect aesthetic.</p>

<div class="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"><span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span><span class="text-sm">{products.length} Products Available</span></div>

</div>

</div>

      <div className="container mx-auto px-4 py-8">
        
    
          <div className="mb-12 mt-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Browse by Collection</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {collections.map((collection) => (
                <button
                  key={collection.id}
                  onClick={() => setSelectedCollection(collection.id)}
                  className="group relative rounded-2xl overflow-hidden h-48 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <img src={collection.image} alt={collection.name} className="w-full h-full object-cover transition group-hover:scale-110" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-80 group-hover:opacity-90 transition`}></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 picns1q">
                    <i className={`fas ${collection.icon} text-3xl mb-2`}></i>
                    <h3 className="font-bold text-lg bctwhite">{collection.name}</h3>
                    <p className="text-sm opacity-80">{collection.productCount} items</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        

      
        {selectedCollection && (
          <>
          <div class="mrtpzqoq332"></div>
            {selectedCollectionData && (
              <div className={`relative rounded-3xl overflow-hidden mb-8 bg-gradient-to-r ${selectedCollectionData.color} p-8 text-white`}>
                <div className="flex items-center gap-4">
                  <i className={`fas ${selectedCollectionData.icon} text-4xl`}></i>
                  <div>
                    <h2 className="text-3xl font-bold">{selectedCollectionData.name} Collection</h2>
                    <p className="opacity-90">{selectedCollectionData.description}</p>
                  </div>
                </div>
              </div>
            )}

           
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-md p-6 mb-8 border border-gray-100 ">
              <div className="flex flex-wrap items-end gap-4">
                <div className="flex-1 min-w-64">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="fas fa-search mr-2"></i>
                    Filter by Name
                  </label>
                  <input
                    type="text"
                    placeholder="Search collection..."
                    value={keywordFilter}
                    onChange={(e) => setKeywordFilter(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-violet-500 transition"/>
                </div>
                <div className="w-32">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Min Price</label>
                  <input
                    type="number"
                    placeholder="$0"
                    value={priceMin}
                    onChange={(e) => setPriceMin(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-violet-500 transition"/>
                </div>
                <div className="w-32">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Max Price</label>
                  <input
                    type="number"
                    placeholder="$∞"
                    value={priceMax}
                    onChange={(e) => setPriceMax(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-violet-500 transition"/>
                </div>
                <button
                  onClick={() => { setKeywordFilter(''); setPriceMin(''); setPriceMax(''); }}
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-xl font-semibold transition">
                  Reset
                </button>
              </div>
            </div>

         
            <div className="flex justify-between items-center mb-6 ">
              <p className="text-gray-600">
                <span className="font-bold text-black text-lg">{filteredProducts.length}</span> products in this collection
              </p>
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-lg transition ${viewMode === 'grid' ? 'bg-white shadow text-black' : 'text-gray-600'}`}>
                  <i className="fas fa-th-large"></i>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-lg transition ${viewMode === 'list' ? 'bg-white shadow text-black' : 'text-gray-600'}`}>
                  <i className="fas fa-list"></i>
                </button>
              </div>
            </div>

         
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl shadow-lg border-2 border-dashed border-gray-200">
                <i className="fas fa-inbox text-5xl text-gray-300 mb-4"></i>
                <p className="text-gray-500">No products match your filters</p>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                    <div className="relative overflow-hidden">
                      <img src={product.image} alt={product.name} className="productcard__image2 transition group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-800 group-hover:text-black transition">{product.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                      <span className="product-price font-bold text-lg">${product.price.toFixed(2)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="flex bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                    <img src={product.image} alt={product.name} className="pftsz1q object-cover" />
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <h3 className="font-bold text-xl text-gray-800 mb-2">{product.name}</h3>
                      <p className="text-gray-500 mb-4">{product.description}</p>
                      <span className="product-price font-bold text-2xl">${product.price.toFixed(2)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      
      
      <div class="mrtpzqoq332"></div>

      <Footer />
    </>
  );
}
