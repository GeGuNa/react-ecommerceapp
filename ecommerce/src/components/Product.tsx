import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  categoryId: number;
  categoryName: string;
  images: string[];
  description: string;
  longDescription: string;
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
  material: string;
  dimensions: {
    width: string;
    height: string;
    depth: string;
    weight: string;
  };
  colors?: { name: string; hex: string }[];
  tags?: string[];
  sku: string;
  brand?: string;
  warranty?: string;
  shippingInfo?: string;
}

interface Review {
  id: number;
  productId: number;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
  helpful: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Modern Lounge Chair',
    price: 299.99,
    originalPrice: 399.99,
    categoryId: 1,
    categoryName: 'Living Room',
    images: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600',
    ],
    description: 'Comfortable and stylish lounge chair with a minimalist design.',
    longDescription: 'This modern lounge chair combines comfort and style in one elegant package. Featuring a minimalist design with clean lines, it fits perfectly in any contemporary living space. The high-quality fabric upholstery provides exceptional comfort for long periods of sitting, while the sturdy wooden frame ensures durability for years to come.',
    inStock: true,
    stockCount: 24,
    rating: 4.8,
    reviewCount: 342,
    material: 'Fabric & Wood',
    dimensions: { width: '28"', height: '32"', depth: '30"', weight: '35 lbs' },
    colors: [
      { name: 'Gray', hex: '#808080' },
      { name: 'Beige', hex: '#D4C4B0' },
      { name: 'Navy', hex: '#1E3A5F' },
      { name: 'Green', hex: '#4A5D4F' },
    ],
    tags: ['Best Seller', 'Eco-Friendly'],
    sku: 'MLC-001',
    brand: 'ModernHome',
    warranty: '2 Years',
    shippingInfo: 'Free shipping on orders over $500',
  },
  {
    id: 2,
    name: 'Walnut Coffee Table',
    price: 449.99,
    categoryId: 1,
    categoryName: 'Living Room',
    images: [
      'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600',
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600',
    ],
    description: 'Solid walnut coffee table with clean lines and natural finish.',
    longDescription: 'Crafted from premium solid walnut, this coffee table showcases the natural beauty of wood grain. The clean lines and minimalist design make it a versatile piece that complements various interior styles.',
    inStock: true,
    stockCount: 12,
    rating: 4.7,
    reviewCount: 189,
    material: 'Solid Walnut',
    dimensions: { width: '48"', height: '18"', depth: '24"', weight: '55 lbs' },
    colors: [{ name: 'Natural', hex: '#8B6F47' }],
    tags: ['Handcrafted'],
    sku: 'WCT-002',
    brand: 'ArtisanWood',
    warranty: '5 Years',
    shippingInfo: 'Free shipping',
  },
  {
    id: 3,
    name: 'Ceramic Vase Set',
    price: 89.99,
    categoryId: 7,
    categoryName: 'Decor',
    images: [
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600',
      'https://images.unsplash.com/photo-1581783342308-f792ca11df53?w=600',
    ],
    description: 'Set of three handcrafted ceramic vases in earth tones.',
    longDescription: 'This beautiful set of three ceramic vases adds a touch of elegance to any space. Each vase is handcrafted by skilled artisans, making every piece unique.',
    inStock: true,
    stockCount: 45,
    rating: 4.9,
    reviewCount: 267,
    material: 'Ceramic',
    dimensions: { width: '6"', height: '12"', depth: '6"', weight: '8 lbs' },
    colors: [{ name: 'Earth Tone', hex: '#C4A57B' }],
    tags: ['New', 'Handmade'],
    sku: 'CVS-003',
    brand: 'ArtisanCraft',
    warranty: '1 Year',
    shippingInfo: 'Standard shipping',
  },
];

const reviews: Review[] = [
  { id: 1, productId: 1, author: 'Sarah M.', rating: 5, date: '2026-03-15', title: 'Absolutely Love It!', content: 'This chair is even better in person. Super comfortable and looks amazing in my living room.', verified: true, helpful: 24 },
  { id: 2, productId: 1, author: 'John D.', rating: 4, date: '2026-03-10', title: 'Great Quality', content: 'Well made and sturdy. Assembly was easy. Only wish it came in more colors.', verified: true, helpful: 18 },
  { id: 3, productId: 1, author: 'Emily R.', rating: 5, date: '2026-03-05', title: 'Perfect for Reading', content: 'I spend hours in this chair reading. The comfort level is outstanding.', verified: true, helpful: 12 },
  { id: 4, productId: 1, author: 'Michael T.', rating: 4, date: '2026-02-28', title: 'Good Value', content: 'For the price, this is an excellent chair. Looks more expensive than it is.', verified: false, helpful: 8 },
];

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  

  const accentColor = '#D4A574';
  const accentDark = '#B8956A';

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = useMemo(() => products.find(p => p.id === Number(id)), [id]);
  const productReviews = useMemo(() => reviews.filter(r => r.productId === Number(id)), [id]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(p => p.id !== product.id && p.categoryId === product.categoryId)
      .slice(0, 4);
  }, [product]);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    navigate('/checkout');
  };

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
            <i className="fas fa-box-open text-6xl text-gray-200 mb-4"></i>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h2>
            <p className="text-gray-500 mb-6">The product you're looking for doesn't exist.</p>
            <Link 
              to="/shop/all-products" 
              className="inline-block px-6 py-3 rounded-lg text-white font-medium"
              style={{ backgroundColor: accentColor }}
            >
              ← Back to Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  const renderStars = (rating: number, size = 'sm') => (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`${star <= rating ? 'fas' : 'far'} fa-star`}
          style={{ 
            color: star <= rating ? accentColor : '#E5E7EB',
            fontSize: size === 'lg' ? '1.1rem' : '0.8rem'
          }}
        ></i>
      ))}
    </div>
  );

  return (
    <>
      <Header />
      
      <div className="bg-gray-50 min-h-screen">
       
       
       
       <div class="mrg81frher3o"></div>
  
        
        

        <div className="container mx-auto px-4 pb-16 ">
        
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              
              <div className="lg:col-span-7 p-6 lg:p-10">
                <div className="flex flex-row gap-4">
                  
                  <div className="hidden md:flex flex-col gap-3 w-20">
                    {product.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all duration-200 ${
                          selectedImage === index ? 'border-[#D4A574] shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>

                
                  <div className="flex-1 relative rounded-2xl overflow-hidden bg-gray-50 aspect-square">
                    <img
                      src={product.images[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    
                 
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {discount > 0 && (
                        <span className="bg-[#D4A574] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
                          Save {discount}%
                        </span>
                      )}
                      {product.tags?.map((tag, i) => (
                        <span key={i} className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <button
                        onClick={() => setIsWishlisted(!isWishlisted)}
                        className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:text-red-500 flex items-center justify-center shadow-lg transition-colors"
                      >
                        <i className={`${isWishlisted ? 'fas' : 'far'} fa-heart`}></i>
                      </button>
                      <div className="relative">
                        <button
                          onClick={() => setShowShareMenu(!showShareMenu)}
                          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:text-[#B8956A] flex items-center justify-center shadow-lg transition-colors"
                        >
                          <i className="fas fa-share-alt"></i>
                        </button>
                        {showShareMenu && (
                          <div className="absolute right-0 mt-2 bg-white rounded-xl shadow-2xl p-2 z-10 min-w-[140px] border border-gray-100">
                            {['Facebook', 'Twitter', 'Pinterest'].map((platform) => (
                              <button key={platform} className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center gap-2 text-sm text-gray-600">
                                <i className={`fab fa-${platform.toLowerCase()} w-4`}></i> {platform}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
               
                <div className="flex md:hidden gap-3 mt-4 overflow-x-auto pb-2">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
                        selectedImage === index ? 'border-[#D4A574]' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

             
              <div className="lg:col-span-5 bg-gray-50/50 p-6 lg:p-10 border-l border-gray-100">
                <div className="sticky top-28 space-y-6">
                  
                
                  <div>
                    {product.brand && (
                      <Link to="#" className="text-sm font-semibold uppercase tracking-wider" style={{ color: accentColor }}>
                        {product.brand}
                      </Link>
                    )}
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1 tracking-tight">{product.name}</h1>
                    <div className="flex items-center gap-3 mt-3">
                      {renderStars(product.rating, 'lg')}
                      <span className="text-gray-600 text-sm">{product.rating}</span>
                      <span className="text-gray-300">|</span>
                      <Link to="#reviews" className="text-sm text-gray-500 hover:text-[#D4A574] underline underline-offset-2">
                        {product.reviewCount} Reviews
                      </Link>
                    </div>
                  </div>

               
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold" style={{ color: accentDark }}>
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xl text-gray-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                
                
                  <p className="text-gray-600 leading-relaxed border-l-4 pl-4 border-[#D4A574] bg-white py-3 pr-3 rounded-r-lg">
                    {product.description}
                  </p>

                 
                  {product.colors && product.colors.length > 1 && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800 mb-3">
                        Color: <span className="font-normal text-gray-500">{selectedColor || 'Select'}</span>
                      </h3>
                      <div className="flex gap-3">
                        {product.colors.map((color) => (
                          <button
                            key={color.name}
                            onClick={() => setSelectedColor(color.name)}
                            className={`w-10 h-10 rounded-full transition-transform duration-200 border-2 ${
                              selectedColor === color.name ? 'scale-110 shadow-lg' : 'hover:scale-105'
                            }`}
                            style={{ 
                              backgroundColor: color.hex,
                              borderColor: selectedColor === color.name ? color.hex : 'white',
                              boxShadow: selectedColor === color.name ? `0 0 0 2px ${accentColor}` : 'none'
                            }}
                            title={color.name}
                          >
                            {selectedColor === color.name && (
                              <i className="fas fa-check text-white text-xs"></i>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

               
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
                      >
                        <i className="fas fa-minus text-xs"></i>
                      </button>
                      <span className="px-5 py-2 font-semibold text-gray-800 text-center min-w-[50px]">{quantity}</span>
                      <button
                        onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
                      >
                        <i className="fas fa-plus text-xs"></i>
                      </button>
                    </div>
                    <div className={`flex items-center gap-2 ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
                      <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      <span className="text-sm font-medium">
                        {product.inStock ? `${product.stockCount} in stock` : 'Out of Stock'}
                      </span>
                    </div>
                  </div>

              
                  <div className="space-y-3 pt-2">
                    <button
                      onClick={handleAddToCart}
                      disabled={!product.inStock}
                      className={`w-full py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 ${
                        addedToCart 
                          ? 'bg-green-500' 
                          : 'bg-[#D4A574] hover:bg-[#B8956A]'
                      } disabled:bg-gray-300 disabled:shadow-none`}
                    >
                      {addedToCart ? (
                        <>
                          <i className="fas fa-check-circle"></i> Added to Cart
                        </>
                      ) : (
                        <>
                          <i className="fas fa-shopping-bag"></i> Add to Cart
                        </>
                      )}
                    </button>
                    <button
                      onClick={handleBuyNow}
                      disabled={!product.inStock}
                      className="w-full py-4 rounded-xl font-bold text-gray-800 border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Buy Now
                    </button>
                  </div>

            
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                      <i className="fas fa-truck text-[#B8956A]"></i>
                      <div className="text-xs text-gray-600">
                        <span className="block font-semibold text-gray-800">Free Shipping</span>
                        {product.shippingInfo}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                      <i className="fas fa-shield-alt text-[#B8956A]"></i>
                      <div className="text-xs text-gray-600">
                        <span className="block font-semibold text-gray-800">Warranty</span>
                        {product.warranty}
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden mb-12">
            <div className="flex border-b border-gray-100 overflow-x-auto">
              {[
                { key: 'description', label: 'Description', icon: 'fa-align-left' },
                { key: 'specs', label: 'Specifications', icon: 'fa-list-ul' },
                { key: 'reviews', label: 'Reviews', icon: 'fa-comment-alt' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`flex-1 min-w-[150px] flex items-center justify-center gap-2 px-6 py-5 font-medium transition relative ${
                    activeTab === tab.key 
                      ? 'text-[#D4A574]' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <i className={`fas ${tab.icon} text-sm`}></i>
                  {tab.label}
                  {activeTab === tab.key && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4A574]"></div>
                  )}
                </button>
              ))}
            </div>

            <div className="p-8 lg:p-12">
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Details</h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">{product.longDescription}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { icon: 'fa-gem', title: 'Premium Quality', desc: 'Finest materials selected' },
                      { icon: 'fa-hammer', title: 'Craftsmanship', desc: 'Handcrafted by experts' },
                      { icon: 'fa-leaf', title: 'Eco-Friendly', desc: 'Sustainable sourcing' },
                      { icon: 'fa-tools', title: 'Easy Assembly', desc: 'Instructions included' }
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[#D4A574]">
                          <i className={`fas ${feature.icon}`}></i>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">{feature.title}</h4>
                          <p className="text-sm text-gray-500">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                  <div className="border rounded-xl overflow-hidden">
                    <table className="w-full text-left">
                      <tbody>
                        {[
                          ['Material', product.material],
                          ['Width', product.dimensions.width],
                          ['Height', product.dimensions.height],
                          ['Depth', product.dimensions.depth],
                          ['Weight', product.dimensions.weight],
                          ['SKU', product.sku]
                        ].map(([label, value], i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-6 py-4 font-medium text-gray-600 w-1/3">{label}</td>
                            <td className="px-6 py-4 text-gray-900 font-semibold">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div id="reviews">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {renderStars(product.rating)}
                        <span className="text-gray-600">Based on {product.reviewCount} reviews</span>
                      </div>
                    </div>
                    <button 
                      className="px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition"
                      style={{ backgroundColor: accentColor }}
                    >
                      Write a Review
                    </button>
                  </div>

                  <div className="space-y-6">
                    {productReviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-[#B8956A]">
                              {review.author.charAt(0)}
                            </div>
                            <div>
                              <span className="font-semibold text-gray-800">{review.author}</span>
                              <div className="flex items-center gap-2">
                                {renderStars(review.rating)}
                                {review.verified && (
                                  <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                                    <i className="fas fa-check-circle"></i> Verified
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-gray-400">{review.date}</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">{review.title}</h4>
                        <p className="text-gray-600">{review.content}</p>
                        <div className="mt-4 flex items-center gap-4">
                          <button className="text-sm text-gray-500 hover:text-[#D4A574] flex items-center gap-2 transition">
                            <i className="far fa-thumbs-up"></i> Helpful ({review.helpful})
                          </button>
                          <button className="text-sm text-gray-500 hover:text-red-500 flex items-center gap-2 transition">
                            <i className="far fa-flag"></i> Report
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

        
          {relatedProducts.length > 0 && (
            <div class="mtqqa3z">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">You May Also Like</h2>
                <Link to="/shop" className="text-[#B8956A] hover:underline flex items-center gap-2 font-medium">
                  View All <i className="fas fa-arrow-right text-sm"></i>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map((rp) => (
                  <Link
                    key={rp.id}
                    to={`/product/${rp.id}`}
                    className="group">
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="relative overflow-hidden aspect-square">
                        <img
                          src={rp.images[0]}
                          alt={rp.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-gray-800 group-hover:text-[#D4A574] transition mb-1">
                          {rp.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-3">
                          {renderStars(rp.rating)}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold" style={{ color: accentDark }}>
                            ${rp.price.toFixed(2)}
                          </span>
                          {rp.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              ${rp.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </>
  );
}
