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
  arrivalDate: string;
  tags?: string[];
}

const products: Product[] = [
  { id: 13, name: 'Velvet Accent Chair', price: 379.99, categoryId: 1, categoryName: 'Living Room', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300', description: 'Plush velvet accent chair', arrivalDate: '2026-03-25', tags: ['Trending', 'Limited'] },
  { id: 3, name: 'Ceramic Vase Set', price: 89.99, categoryId: 7, categoryName: 'Decor', image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=300', description: 'Handcrafted ceramic vases', arrivalDate: '2026-03-20', tags: ['Eco-Friendly'] },
  { id: 14, name: 'Marble Side Table', price: 249.99, categoryId: 1, categoryName: 'Living Room', image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=300', description: 'Elegant marble side table', arrivalDate: '2026-03-22', tags: ['Luxury'] },
  { id: 15, name: 'Rattan Pendant Light', price: 179.99, categoryId: 6, categoryName: 'Lighting', image: 'https://images.unsplash.com/photo-1540932296774-3ed6d53f056f?w=300', description: 'Natural rattan pendant', arrivalDate: '2026-03-18', tags: ['Handmade'] },
  { id: 7, name: 'Ergonomic Office Chair', price: 349.99, categoryId: 4, categoryName: 'Home Office', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300', description: 'Adjustable ergonomic chair', arrivalDate: '2026-03-15', tags: ['Best Value'] },
  { id: 12, name: 'Nightstand Set', price: 279.99, categoryId: 2, categoryName: 'Bedroom', image: 'https://images.unsplash.com/photo-1551298370-9d3d53740c6c?w=300', description: 'Minimalist nightstands', arrivalDate: '2026-03-10', tags: ['Sale'] },
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

const tagOptions = ['Trending', 'Limited', 'Eco-Friendly', 'Luxury', 'Handmade', 'Best Value', 'Sale'];

export default function NewArrivals() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<'week' | 'month' | 'all'>('month');
  const [searchText, setSearchText] = useState('');
  const [showOnlyTagged, setShowOnlyTagged] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = products;

  
    const now = new Date();
    const cutoffDate = new Date();
    if (dateRange === 'week') cutoffDate.setDate(now.getDate() - 7);
    else if (dateRange === 'month') cutoffDate.setDate(now.getDate() - 30);
    else cutoffDate.setFullYear(2000);

    result = result.filter(p => new Date(p.arrivalDate) >= cutoffDate);

    if (selectedCategory) {
      result = result.filter(p => p.categoryId === selectedCategory);
    }

    if (selectedTags.length > 0) {
      result = result.filter(p => p.tags?.some(tag => selectedTags.includes(tag)));
    }

    if (showOnlyTagged) {
      result = result.filter(p => p.tags && p.tags.length > 0);
    }

    if (searchText.trim()) {
      const term = searchText.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(term));
    }

    return result.sort((a, b) => new Date(b.arrivalDate).getTime() - new Date(a.arrivalDate).getTime());
  }, [selectedCategory, selectedTags, dateRange, searchText, showOnlyTagged]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const getDaysAgo = (dateStr: string) => {
    const days = Math.floor((new Date().getTime() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24));
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    return `${days} days ago`;
  };

  return (
    <>
      <Header />

     
      <div className="PageHero bger1">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-4">
            <span className="bg-white backdrop-blur px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              Fresh Drops Weekly
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 clrBdflq3qtxtwht">New Arrivals</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Be the first to discover our latest pieces. Updated every week.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
          
            <button
              onClick={() => setDateRange('week')}
              className={`px-6 py-3 rounded-full font-semibold transition ${dateRange === 'week' ? 'bg-black text-white ' : 'bg-white '}`}>
                This Week
            </button>
            
            <button
              onClick={() => setDateRange('month')}
              className={`px-6 py-3 rounded-full font-semibold transition ${dateRange === 'month' ? 'bg-black text-white' : 'bg-white  '}`}>
                This Month
            </button>
            
            <button
              onClick={() => setDateRange('all')}
              className={`px-6 py-3 rounded-full font-semibold transition ${dateRange === 'all' ? 'bg-black text-white' : 'bg-white  '}`}>
                All Time
            </button>
            
            
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 mt-10  mb-8">
         
          <aside className="lg:w-1/4 space-y-6">
      
            <div className="bg-white rounded-2xl p-6">
             
             
             <h3 class="font-bold text-lg mb-4  flex gap-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z"></path></svg> Find New Items</h3>
             
             
              <input
                type="text"
                placeholder="Search by name..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 bg-white"/>
            </div>

         
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-lg mb-4 flex gap-2"><svg stroke="green" fill="green" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"></path></svg> Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${!selectedCategory ? 'bg-black text-white' : 'hover:bg-gray-200'}`}>
                  All Categories
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${selectedCategory === cat.id ? 'bg-black text-white' : 'hover:bg-gray-200'}`}>
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

         
           

       
      
          </aside>

        
          <div className="lg:w-3/4">
         
            <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 flex items-center justify-between">
              <p className="text-gray-600 pslflexgap1">
                <span className="font-bold  text-2xl">{filteredProducts.length}</span> new products
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <i className="fas fa-clock"></i>
                <span>Sorted by newest first</span>
              </div>
            </div>

           
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
                <i className="fas fa-box-open text-6xl text-gray-300 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-700">No new arrivals yet</h3>
                <p className="text-gray-500">Check back soon for fresh pieces!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredProducts.map((product, index) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col md:flex-row">
                    <div className="relative md:w-72 h-48 md:h-auto flex-shrink-0">
                      <img src={product.image} alt={product.name} className="productcard__image23" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                          
                          NEW
                        </span>
                      </div>
                 
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="text-xs  font-semibold uppercase">{product.categoryName}</span>
                          <h3 className="text-xl font-bold text-gray-800 group-hover: transition">{product.name}</h3>
                        </div>
                        <span className=" font-bold text-2xl">${product.price.toFixed(2)}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <i className="fas fa-calendar text-green-500"></i>
                          <span>Added {getDaysAgo(product.arrivalDate)}</span>
                        </div>
                        {product.tags && (
                          <div className="flex gap-2">
                            {product.tags.map(tag => (
                              <span key={tag} className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
