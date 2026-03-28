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
  inStock: boolean;
  material?: string;
}

const products: Product[] = [
  { id: 1, name: 'Modern Lounge Chair', price: 299.99, categoryId: 1, categoryName: 'Living Room', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300', description: 'Comfortable and stylish lounge chair.', inStock: true, material: 'Fabric' },
  { id: 2, name: 'Walnut Coffee Table', price: 449.99, categoryId: 1, categoryName: 'Living Room', image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=300', description: 'Solid walnut coffee table.', inStock: true, material: 'Wood' },
  { id: 3, name: 'Ceramic Vase Set', price: 89.99, categoryId: 7, categoryName: 'Decor', image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=300', description: 'Handcrafted ceramic vases.', inStock: true, material: 'Ceramic' },
  { id: 4, name: 'Floor Lamp Brass', price: 159.99, categoryId: 6, categoryName: 'Lighting', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300', description: 'Elegant brass floor lamp.', inStock: false, material: 'Metal' },
  { id: 5, name: 'Upholstered Bed Frame', price: 899.99, categoryId: 2, categoryName: 'Bedroom', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300', description: 'Luxurious upholstered bed frame.', inStock: true, material: 'Fabric' },
  { id: 6, name: 'Dining Table Extendable', price: 1299.99, categoryId: 3, categoryName: 'Dining', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=300', description: 'Solid oak dining table.', inStock: true, material: 'Wood' },
  { id: 7, name: 'Ergonomic Office Chair', price: 349.99, categoryId: 4, categoryName: 'Home Office', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300', description: 'Adjustable ergonomic chair.', inStock: true, material: 'Mesh' },
  { id: 8, name: 'Patio Lounge Set', price: 699.99, categoryId: 5, categoryName: 'Outdoor', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=300', description: 'Weather-resistant lounge set.', inStock: true, material: 'Metal' },
  { id: 9, name: 'Pendant Light', price: 129.99, categoryId: 6, categoryName: 'Lighting', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300', description: 'Modern glass pendant light.', inStock: true, material: 'Glass' },
  { id: 10, name: 'Wall Mirror', price: 189.99, categoryId: 7, categoryName: 'Decor', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300', description: 'Large arched mirror.', inStock: false, material: 'Glass' },
  { id: 11, name: 'Bookcase', price: 399.99, categoryId: 8, categoryName: 'Storage', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=300', description: 'Open bookcase.', inStock: true, material: 'Wood' },
  { id: 12, name: 'Nightstand Set', price: 279.99, categoryId: 2, categoryName: 'Bedroom', image: 'https://images.unsplash.com/photo-1551298370-9d3d53740c6c?w=300', description: 'Minimalist nightstands.', inStock: true, material: 'Wood' },
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

const priceRanges = [
  { id: 'under100', label: 'Under $100', min: 0, max: 100 },
  { id: '100to300', label: '$100 - $300', min: 100, max: 300 },
  { id: '300to500', label: '$300 - $500', min: 300, max: 500 },
  { id: '500to1000', label: '$500 - $1000', min: 500, max: 1000 },
  { id: 'over1000', label: 'Over $1000', min: 1000, max: Infinity },
];

const materials = ['Wood', 'Fabric', 'Metal', 'Glass', 'Ceramic', 'Mesh'];

export default function AllProducts() {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'relevance' | 'price-low' | 'price-high' | 'name'>('relevance');

  const toggleCategory = (id: number) => {
    setSelectedCategories(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const togglePriceRange = (id: string) => {
    setSelectedPriceRanges(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const toggleMaterial = (material: string) => {
    setSelectedMaterials(prev => 
      prev.includes(material) ? prev.filter(m => m !== material) : [...prev, material]
    );
  };

  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.categoryId));
    }

    if (selectedPriceRanges.length > 0) {
      result = result.filter(p => 
        selectedPriceRanges.some(rangeId => {
          const range = priceRanges.find(r => r.id === rangeId);
          return range && p.price >= range.min && p.price <= range.max;
        })
      );
    }

    if (selectedMaterials.length > 0) {
      result = result.filter(p => p.material && selectedMaterials.includes(p.material));
    }

    if (inStockOnly) {
      result = result.filter(p => p.inStock);
    }

    if (searchQuery.trim()) {
      const term = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
      );
    }

    return result;
  }, [selectedCategories, selectedPriceRanges, selectedMaterials, inStockOnly, searchQuery]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [filteredProducts, sortBy]);

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRanges([]);
    setSelectedMaterials([]);
    setInStockOnly(false);
    setSearchQuery('');
    setSortBy('relevance');
  };

  const activeFilterCount = selectedCategories.length + selectedPriceRanges.length + selectedMaterials.length + (inStockOnly ? 1 : 0);

  return (
    <>
      <Header />

     
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 mrg81frhero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 clrBdflq3qtxtwht">All Products</h1>
          <p className="text-xl text-gray-300 mb-6">Complete furniture catalog with advanced filtering</p>
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm">{products.length} Products Available</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 mrtpzqoq332">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <aside className="lg:w-1/4 space-y-6">
           
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <i className="fas fa-search text-primary"></i>
                Search
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Find products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary transition"/>
                <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>

          
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <i className="fas fa-folder text-primary"></i>
                  Categories
                </h3>
                {selectedCategories.length > 0 && (
                  <button onClick={() => setSelectedCategories([])} className="text-xs text-primary hover:underline">
                    Clear
                  </button>
                )}
              </div>
              <div className="space-y-2">
                {categories.map(cat => (
                  <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat.id)}
                      onChange={() => toggleCategory(cat.id)}
                      className="w-5 h-5 rounded border-2 border-gray-300 text-primary focus:ring-primary"/>
                    <span className="group-hover:text-primary transition">{cat.name}</span>
                    <span className="ml-auto text-xs text-gray-400">
                      {products.filter(p => p.categoryId === cat.id).length}
                    </span>
                  </label>
                ))}
              </div>
            </div>

           
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <i className="fas fa-tag text-primary"></i>
                  Price Range
                </h3>
                {selectedPriceRanges.length > 0 && (
                  <button onClick={() => setSelectedPriceRanges([])} className="text-xs text-primary hover:underline">
                    Clear
                  </button>
                )}
              </div>
              <div className="space-y-2">
                {priceRanges.map(range => (
                  <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedPriceRanges.includes(range.id)}
                      onChange={() => togglePriceRange(range.id)}
                      className="w-5 h-5 rounded border-2 border-gray-300 text-primary focus:ring-primary"/>
                    <span className="group-hover:text-primary transition">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

        
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <i className="fas fa-cube text-primary"></i>
                  Material
                </h3>
                {selectedMaterials.length > 0 && (
                  <button onClick={() => setSelectedMaterials([])} className="text-xs text-primary hover:underline">
                    Clear
                  </button>
                )}
              </div>
              <div className="space-y-2">
                {materials.map(material => (
                  <label key={material} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(material)}
                      onChange={() => toggleMaterial(material)}
                      className="w-5 h-5 rounded border-2 border-gray-300 text-primary focus:ring-primary"/>
                    <span className="group-hover:text-primary transition">{material}</span>
                  </label>
                ))}
              </div>
            </div>

           
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-5 h-5 rounded border-2 border-gray-300 text-primary focus:ring-primary"/>
                <span className="font-medium">In Stock Only</span>
              </label>
            </div>

         
            {activeFilterCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="w-full bg-red-50 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-100 transition flex items-center justify-center gap-2">
                <i className="fas fa-times"></i>
                Clear All Filters ({activeFilterCount})
              </button>
            )}
          </aside>

      
          <div className="lg:w-3/4">
           
            <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-gray-600">
                <span className="font-bold text-primary text-xl">{sortedProducts.length}</span> products found
              </p>
              <div className="flex items-center gap-3">
                <label className="text-sm text-gray-600">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="border-2 border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:border-primary">
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A-Z</option>
                </select>
              </div>
            </div>

        
            {sortedProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
                <i className="fas fa-search text-6xl text-gray-300 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters</p>
                <button onClick={clearAllFilters} className="text-primary hover:underline font-semibold">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative">
                        <img src={product.image} alt={product.name} className="productcard__image2" />
                        {!product.inStock && (
                          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-semibold">Out of Stock</span>
                        )}
                        {product.material && (
                          <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            {product.material}
                          </span>
                        )}
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-primary font-semibold uppercase tracking-wide">{product.categoryName}</span>
                        <h3 className="font-bold text-lg mb-1 mt-1">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-primary font-bold text-xl">${product.price.toFixed(2)}</span>
                          {product.inStock ? (
                            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded flex items-center gap-1">
                              <i className="fas fa-check-circle"></i> In Stock
                            </span>
                          ) : (
                            <span className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded">
                              Unavailable
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
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
