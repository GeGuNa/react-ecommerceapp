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

     
      <div className="bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 text-white py-20 mrg81frhero">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-4">
            <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              Fresh Drops Weekly
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">New Arrivals</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Be the first to discover our latest pieces. Updated every week.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setDateRange('week')}
              className={`px-6 py-3 rounded-full font-semibold transition ${dateRange === 'week' ? 'bg-white text-green-600' : 'bg-white/20 hover:bg-white/30'}`}>
                This Week
            </button>
            <button
              onClick={() => setDateRange('month')}
              className={`px-6 py-3 rounded-full font-semibold transition ${dateRange === 'month' ? 'bg-white text-green-600' : 'bg-white/20 hover:bg-white/30'}`}>
                This Month
            </button>
            <button
              onClick={() => setDateRange('all')}
              className={`px-6 py-3 rounded-full font-semibold transition ${dateRange === 'all' ? 'bg-white text-green-600' : 'bg-white/20 hover:bg-white/30'}`}>
                All Time
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 mt-10  mb-8">
         
          <aside className="lg:w-1/4 space-y-6">
      
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-100">
             
             
             <h3 class="font-bold text-lg mb-4 text-green-800 flex gap-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z"></path></svg> Find New Items</h3>
             
             
              <input
                type="text"
                placeholder="Search by name..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:border-green-500 bg-white"/>
            </div>

         
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-lg mb-4 flex gap-2"><svg stroke="yellow" fill="yellow" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"></path></svg> Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${!selectedCategory ? 'bg-green-500 text-white' : 'hover:bg-green-50'}`}>
                  All Categories
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${selectedCategory === cat.id ? 'bg-green-500 text-white' : 'hover:bg-green-50'}`}>
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

         
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg flex gap-2"><svg stroke="green" fill="green" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg> Tags</h3>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={showOnlyTagged} onChange={(e) => setShowOnlyTagged(e.target.checked)} className="rounded" />
                  <span>Tagged only</span>
                </label>
              </div>
              <div className="flex flex-wrap gap-2">
                {tagOptions.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                      selectedTags.includes(tag)
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 hover:bg-green-100 text-gray-700'
                    }`}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>

       
      
          </aside>

        
          <div className="lg:w-3/4">
         
            <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 flex items-center justify-between">
              <p className="text-gray-600 pslflexgap1">
                <span className="font-bold text-green-600 text-2xl">{filteredProducts.length}</span> new products
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
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                          
                          NEW
                        </span>
                      </div>
                 
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="text-xs text-green-600 font-semibold uppercase">{product.categoryName}</span>
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition">{product.name}</h3>
                        </div>
                        <span className="text-green-600 font-bold text-2xl">${product.price.toFixed(2)}</span>
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
