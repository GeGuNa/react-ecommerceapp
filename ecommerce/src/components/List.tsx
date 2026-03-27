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
}


const products: Product[] = [
  {
    id: 1,
    name: 'Modern Lounge Chair',
    price: 299.99,
    categoryId: 1,
    categoryName: 'Living Room',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300',
    description: 'Comfortable and stylish lounge chair with a minimalist design.',
  },
  {
    id: 2,
    name: 'Walnut Coffee Table',
    price: 449.99,
    categoryId: 1,
    categoryName: 'Living Room',
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=300',
    description: 'Solid walnut coffee table with clean lines and natural finish.',
  },
  {
    id: 3,
    name: 'Ceramic Vase Set',
    price: 89.99,
    categoryId: 7,
    categoryName: 'Decor',
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=300',
    description: 'Set of three handcrafted ceramic vases in earth tones.',
  },
  {
    id: 4,
    name: 'Floor Lamp Brass',
    price: 159.99,
    categoryId: 6,
    categoryName: 'Lighting',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300',
    description: 'Elegant brass floor lamp with adjustable arm.',
  },
  {
    id: 5,
    name: 'Upholstered Bed Frame',
    price: 899.99,
    categoryId: 2,
    categoryName: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300',
    description: 'Luxurious upholstered bed frame in velvet fabric.',
  },
  {
    id: 6,
    name: 'Dining Table Extendable',
    price: 1299.99,
    categoryId: 3,
    categoryName: 'Dining',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=300',
    description: 'Solid oak dining table with extendable leaf for extra seating.',
  },
  {
    id: 7,
    name: 'Ergonomic Office Chair',
    price: 349.99,
    categoryId: 4,
    categoryName: 'Home Office',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300',
    description: 'Adjustable ergonomic chair with lumbar support.',
  },
  {
    id: 8,
    name: 'Patio Lounge Set',
    price: 699.99,
    categoryId: 5,
    categoryName: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=300',
    description: 'Weather-resistant lounge set with two chairs and table.',
  },
  {
    id: 9,
    name: 'Pendant Light',
    price: 129.99,
    categoryId: 6,
    categoryName: 'Lighting',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300',
    description: 'Modern glass pendant light for kitchen or dining area.',
  },
  {
    id: 10,
    name: 'Wall Mirror',
    price: 189.99,
    categoryId: 7,
    categoryName: 'Decor',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300',
    description: 'Large arched mirror with gold frame.',
  },
  {
    id: 11,
    name: 'Bookcase',
    price: 399.99,
    categoryId: 8,
    categoryName: 'Storage',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=300',
    description: 'Open bookcase with adjustable shelves.',
  },
  {
    id: 12,
    name: 'Nightstand Set',
    price: 279.99,
    categoryId: 2,
    categoryName: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1551298370-9d3d53740c6c?w=300',
    description: 'Pair of minimalist nightstands with drawer.',
  },
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

export default function ProductListing() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');


  const filteredProducts = useMemo(() => {
    let result = products;
    if (selectedCategory !== null) {
      result = result.filter(p => p.categoryId === selectedCategory);
    }
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
      );
    }
    return result;
  }, [selectedCategory, searchTerm]);


  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );
  }, [filteredProducts, sortOrder]);

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSearchTerm('');
    setSortOrder('asc');
  };

  return (
    <>
      <Header />

      <div className="PageHero bger1">
        <h2 className="PHSize mb-4">Shop All Products</h2>
        <p className="PSizeText">Discover furniture that inspires</p>
      </div>

      <div className="DvContq mtqqaz">
        <div className="flex flex-col md:flex-row gap-8">
 
          <aside className="md:w-1/4 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition ${
                      selectedCategory === null ? 'bg-primary Sldbfqqdef' : 'hover:bg-gray-100'
                    }`}>
                    All Categories
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition ${
                        selectedCategory === cat.id ? 'bg-primary Sldbfqqdef' : 'hover:bg-gray-100'
                      }`}>
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-lg mb-4">Sort by Price</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setSortOrder('asc')}
                  className={`flex-1 px-3 py-2 rounded-lg transition ${
                    sortOrder === 'asc' ? 'Sldbfqqdef' : 'bg-gray-100 hover:bg-gray-200'
                  }`}> Low → High
                </button>
                <button
                  onClick={() => setSortOrder('desc')}
                  className={`flex-1 px-3 py-2 rounded-lg transition ${
                    sortOrder === 'desc' ? 'Sldbfqqdef' : 'bg-gray-100 hover:bg-gray-200'
                  }`}>High → Low
                </button>
              </div>
            </div>

            {(selectedCategory !== null || searchTerm !== '' || sortOrder !== 'asc') && (
              <button
                onClick={handleClearFilters}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition">
                Clear All Filters
              </button>
            )}
          </aside>

       
          <div className="md:w-3/4">
     
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none bg-whTiq"/>
                <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>

           
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing <span className="font-bold">{sortedProducts.length}</span> products
              </p>
            </div>

            {sortedProducts.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
                <i className="fas fa-search text-5xl text-gray-300 mb-4"></i>
                <p className="text-gray-500 text-lg">
                  No products found matching your criteria.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="mt-4 text-primary hover:underline">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl hover:-translate-y-1">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-card__image"/>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-primary font-bold text-lg">
                            ${product.price.toFixed(2)}
                          </span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {product.categoryName}
                          </span>
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
