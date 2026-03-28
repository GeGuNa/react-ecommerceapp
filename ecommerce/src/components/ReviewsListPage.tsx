import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface Review {
  id: number;
  productId: number;
  productName: string;
  productImage: string;
  author: string;
  authorAvatar?: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
  helpful: number;
  notHelpful: number;
  images?: string[];
  pros?: string[];
  cons?: string[];
  wouldRecommend: boolean;
}

interface Product {
  id: number;
  name: string;
  image: string;
  averageRating: number;
  totalReviews: number;
}

const products: Product[] = [
  { id: 1, name: 'Modern Lounge Chair', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300', averageRating: 4.8, totalReviews: 342 },
  { id: 2, name: 'Walnut Coffee Table', image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=300', averageRating: 4.7, totalReviews: 189 },
  { id: 3, name: 'Ceramic Vase Set', image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=300', averageRating: 4.9, totalReviews: 267 },
];

const reviews: Review[] = [
  {
    id: 1,
    productId: 1,
    productName: 'Modern Lounge Chair',
    productImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300',
    author: 'Sarah M.',
    authorAvatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    date: '2026-03-15',
    title: 'Absolutely Love It!',
    content: 'This chair is even better in person. Super comfortable and looks amazing in my living room. The fabric quality is excellent and the assembly was straightforward. I spent about 30 minutes putting it together following the clear instructions. Highly recommend for anyone looking for a stylish yet comfortable seating option.',
    verified: true,
    helpful: 24,
    notHelpful: 2,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300',
    ],
    pros: ['Comfortable', 'Easy Assembly', 'Great Quality'],
    cons: ['Wish it came in more colors'],
    wouldRecommend: true,
  },
  {
    id: 2,
    productId: 1,
    productName: 'Modern Lounge Chair',
    productImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300',
    author: 'John D.',
    authorAvatar: 'https://i.pravatar.cc/150?img=2',
    rating: 4,
    date: '2026-03-10',
    title: 'Great Quality',
    content: 'Well made and sturdy. Assembly was easy. Only wish it came in more colors. The chair feels solid and the cushions are very comfortable. I use it daily for reading and it has held up well over the past month.',
    verified: true,
    helpful: 18,
    notHelpful: 1,
    pros: ['Sturdy', 'Comfortable Cushions'],
    cons: ['Limited Color Options'],
    wouldRecommend: true,
  },
  {
    id: 3,
    productId: 1,
    productName: 'Modern Lounge Chair',
    productImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300',
    author: 'Emily R.',
    authorAvatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    date: '2026-03-05',
    title: 'Perfect for Reading',
    content: 'I spend hours in this chair reading. The comfort level is outstanding. The back support is excellent and I never feel tired even after sitting for 2-3 hours. Worth every penny!',
    verified: true,
    helpful: 12,
    notHelpful: 0,
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300'],
    pros: ['Excellent Back Support', 'Very Comfortable', 'Great Value'],
    cons: [],
    wouldRecommend: true,
  },
  {
    id: 4,
    productId: 1,
    productName: 'Modern Lounge Chair',
    productImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300',
    author: 'Michael T.',
    authorAvatar: 'https://i.pravatar.cc/150?img=4',
    rating: 4,
    date: '2026-02-28',
    title: 'Good Value',
    content: 'For the price, this is an excellent chair. Looks more expensive than it is. The only minor issue is that the legs could be slightly more sturdy, but overall very satisfied with the purchase.',
    verified: false,
    helpful: 8,
    notHelpful: 3,
    pros: ['Great Price', 'Looks Expensive'],
    cons: ['Legs Could Be Sturdier'],
    wouldRecommend: true,
  },
  {
    id: 5,
    productId: 1,
    productName: 'Modern Lounge Chair',
    productImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300',
    author: 'Lisa K.',
    authorAvatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    date: '2026-02-20',
    title: 'Best Purchase This Year!',
    content: 'I have been looking for the perfect lounge chair for months and finally found it! The design is sleek, modern, and fits perfectly in my apartment. Guests always compliment it.',
    verified: true,
    helpful: 31,
    notHelpful: 1,
    images: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300',
    ],
    pros: ['Sleek Design', 'Modern Look', 'Comfortable'],
    cons: [],
    wouldRecommend: true,
  },
  {
    id: 6,
    productId: 1,
    productName: 'Modern Lounge Chair',
    productImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300',
    author: 'David W.',
    authorAvatar: 'https://i.pravatar.cc/150?img=6',
    rating: 3,
    date: '2026-02-15',
    title: 'Decent But Not Perfect',
    content: 'The chair is okay for the price. Comfortable enough for short periods but I find the backrest a bit too upright for my liking. Good for a guest room but not for daily extended use.',
    verified: true,
    helpful: 5,
    notHelpful: 8,
    pros: ['Affordable', 'Nice Appearance'],
    cons: ['Backrest Too Upright', 'Not for Extended Use'],
    wouldRecommend: false,
  },
  {
    id: 7,
    productId: 1,
    productName: 'Modern Lounge Chair',
    productImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300',
    author: 'Amanda P.',
    authorAvatar: 'https://i.pravatar.cc/150?img=7',
    rating: 5,
    date: '2026-02-10',
    title: 'Exceeded Expectations',
    content: 'I was hesitant to buy furniture online but this chair exceeded all my expectations. The quality is fantastic and it arrived well-packaged with no damage.',
    verified: true,
    helpful: 15,
    notHelpful: 0,
    pros: ['High Quality', 'Well Packaged', 'Fast Shipping'],
    cons: [],
    wouldRecommend: true,
  },
  {
    id: 8,
    productId: 1,
    productName: 'Modern Lounge Chair',
    productImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300',
    author: 'Robert H.',
    authorAvatar: 'https://i.pravatar.cc/150?img=8',
    rating: 4,
    date: '2026-02-05',
    title: 'Solid Choice',
    content: 'Good chair for the money. Assembly took about 45 minutes. The instructions could be clearer but I managed. Overall happy with the purchase.',
    verified: true,
    helpful: 9,
    notHelpful: 2,
    pros: ['Good Value', 'Sturdy'],
    cons: ['Instructions Could Be Clearer'],
    wouldRecommend: true,
  },
];

export default function ReviewsListPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState<number | null>(id ? Number(id) : null);
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'helpful' | 'highest' | 'lowest'>('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [withPhotosOnly, setWithPhotosOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  const product = useMemo(() => 
    products.find(p => p.id === selectedProduct), 
    [selectedProduct]
  );

  const filteredReviews = useMemo(() => {
    let result = selectedProduct 
      ? reviews.filter(r => r.productId === selectedProduct)
      : reviews;

    if (ratingFilter) {
      result = result.filter(r => r.rating === ratingFilter);
    }

    if (verifiedOnly) {
      result = result.filter(r => r.verified);
    }

    if (withPhotosOnly) {
      result = result.filter(r => r.images && r.images.length > 0);
    }

    if (searchQuery.trim()) {
      const term = searchQuery.toLowerCase();
      result = result.filter(r =>
        r.title.toLowerCase().includes(term) ||
        r.content.toLowerCase().includes(term) ||
        r.author.toLowerCase().includes(term)
      );
    }


    if (sortBy === 'newest') {
      result = result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === 'oldest') {
      result = result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (sortBy === 'helpful') {
      result = result.sort((a, b) => b.helpful - a.helpful);
    } else if (sortBy === 'highest') {
      result = result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'lowest') {
      result = result.sort((a, b) => a.rating - b.rating);
    }

    return result;
  }, [selectedProduct, ratingFilter, verifiedOnly, withPhotosOnly, searchQuery, sortBy]);


  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const paginatedReviews = filteredReviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );


  const ratingDistribution = useMemo(() => {
    const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    const productReviews = selectedProduct 
      ? reviews.filter(r => r.productId === selectedProduct)
      : reviews;
    
    productReviews.forEach(r => {
      dist[r.rating as keyof typeof dist]++;
    });
    
    return dist;
  }, [selectedProduct]);

  const averageRating = useMemo(() => {
    const productReviews = selectedProduct 
      ? reviews.filter(r => r.productId === selectedProduct)
      : reviews;
    
    if (productReviews.length === 0) return 0;
    const sum = productReviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / productReviews.length).toFixed(1);
  }, [selectedProduct]);

  const recommendPercentage = useMemo(() => {
    const productReviews = selectedProduct 
      ? reviews.filter(r => r.productId === selectedProduct)
      : reviews;
    
    if (productReviews.length === 0) return 0;
    const recommendCount = productReviews.filter(r => r.wouldRecommend).length;
    return Math.round((recommendCount / productReviews.length) * 100);
  }, [selectedProduct]);

  const renderStars = (rating: number, size = 'sm', interactive = false, onRate?: (rating: number) => void) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => interactive && onRate?.(star)}
          className={`${interactive ? 'cursor-pointer hover:scale-110 transition' : 'cursor-default'}`}
          disabled={!interactive}>
          <i
            className={`fas fa-star ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            } ${size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-lg' : 'text-sm'}`}></i>
        </button>
      ))}
    </div>
  );

  const [helpfulVotes, setHelpfulVotes] = useState<Record<number, 'helpful' | 'notHelpful' | null>>({});

  const handleVote = (reviewId: number, type: 'helpful' | 'notHelpful') => {
    setHelpfulVotes(prev => ({
      ...prev,
      [reviewId]: prev[reviewId] === type ? null : type,
    }));
  };

  const clearFilters = () => {
    setRatingFilter(null);
    setVerifiedOnly(false);
    setWithPhotosOnly(false);
    setSearchQuery('');
    setSortBy('newest');
    setCurrentPage(1);
  };

  const activeFilterCount = 
    (ratingFilter ? 1 : 0) + 
    (verifiedOnly ? 1 : 0) + 
    (withPhotosOnly ? 1 : 0) + 
    (searchQuery ? 1 : 0);

  return (
    <>
      <Header />







<div class="PageHero bger1">
<div class="container mx-auto px-4 text-center">

	<h1 class="text-5xl md:text-6xl font-bold mb-4 clrBdflq3qtxtwht">Customer Reviews</h1>
	<p class="text-xl opacity-90 max-w-2xl mx-auto">Real feedback from real customers</p>
	
</div>
</div>







      <div className="container mx-auto px-4 py-8 mrtpzqoq332">
        <div className="flex flex-col lg:flex-row gap-8">
        
          <aside className="lg:w-1/4 space-y-6">
          


        
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <i className="fas fa-search text-black-500"></i>
                Search Reviews
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search reviews..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-4 py-3 pl-10 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500"
                />
                <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>

         
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <i className="fas fa-star text-black-500"></i>
                  Rating
                </h3>
                {ratingFilter && (
                  <button onClick={() => setRatingFilter(null)} className="text-xs text-black-500 hover:underline">
                    Clear
                  </button>
                )}
              </div>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <button
                    key={star}
                    onClick={() => {
                      setRatingFilter(ratingFilter === star ? null : star);
                      setCurrentPage(1);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition ${
                      ratingFilter === star ? 'hover:bg-gray-100 text-white' : 'hover:bg-gray-100'
                    }`}>
                    <div className="flex items-center gap-2">
                      {renderStars(star)}
                      <span className="text-sm clrBdflq">{star} stars</span>
                    </div>
                    <span className="text-sm opacity-70 clrBdflq">{ratingDistribution[star as keyof typeof ratingDistribution]}</span>
                  </button>
                ))}
              </div>
            </div>

           
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <i className="fas fa-filter text-black-500"></i>
                More Filters
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={verifiedOnly}
                    onChange={(e) => {
                      setVerifiedOnly(e.target.checked);
                      setCurrentPage(1);
                    }}
                    className="w-5 h-5 rounded border-2 border-gray-300 text-black-500 focus:ring-indigo-500"
                  />
                  <span className="flex items-center gap-2">
                    <i className="fas fa-check-circle text-green-500"></i>
                    Verified Purchase
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={withPhotosOnly}
                    onChange={(e) => {
                      setWithPhotosOnly(e.target.checked);
                      setCurrentPage(1);
                    }}
                    className="w-5 h-5 rounded border-2 border-gray-300 text-black-500 focus:ring-indigo-500"
                  />
                  <span className="flex items-center gap-2">
                    <i className="fas fa-image text-blue-500"></i>
                    With Photos Only
                  </span>
                </label>
              </div>
            </div>

          
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <i className="fas fa-sort text-black-500"></i>
                Sort By
              </h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500">
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="helpful">Most Helpful</option>
                <option value="highest">Highest Rating</option>
                <option value="lowest">Lowest Rating</option>
              </select>
            </div>

         
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="w-full bg-red-50 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-100 transition flex items-center justify-center gap-2">
                <i className="fas fa-times"></i>
                Clear All Filters ({activeFilterCount})
              </button>
            )}
          </aside>

       
          <div className="lg:w-3/4">
         
            {product && (
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 flex items-center gap-6">
                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-xl" />
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h2>
                  <div className="flex items-center gap-4">
                    {renderStars(product.averageRating, 'md')}
                    <span className="text-gray-600">{product.averageRating}</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-600">{product.totalReviews} reviews</span>
                  </div>
                </div>
                <Link
                  to={`/product/${product.id}`}
                  className="bg-black text-white px-6 py-3 rounded-xl font-semibold transition">
                  View Product
                </Link>
              </div>
            )}

         
          

          
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                <span className="font-bold text-black">{paginatedReviews.length}</span> 
                <span className="font-bold text-black">{filteredReviews.length}</span> reviews
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2">
                <i className="fas fa-pen"></i>
                Write a Review
              </button>
            </div>

         
            {paginatedReviews.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
                <i className="fas fa-comment-slash text-6xl text-gray-300 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No reviews found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters</p>
                <button onClick={clearFilters} className="text-black-500 hover:underline font-semibold">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {paginatedReviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={review.authorAvatar || `https://i.pravatar.cc/150?img=${review.id}`}
                          alt={review.author}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-gray-900">{review.author}</h4>
                            {review.verified && (
                              <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                                <i className="fas fa-check-circle"></i> Verified
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            {renderStars(review.rating)}
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      {review.wouldRecommend && (
                        <span className="text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <i className="fas fa-thumbs-up"></i> Recommends
                        </span>
                      )}
                    </div>

                   
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{review.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{review.content}</p>

                  
                    {(review.pros?.length || review.cons?.length) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {review.pros && review.pros.length > 0 && (
                          <div className="bg-green-50 rounded-xl p-4">
                            <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                              <i className="fas fa-check-circle"></i> Pros
                            </h4>
                            <ul className="space-y-1">
                              {review.pros.map((pro, i) => (
                                <li key={i} className="text-sm text-green-600 flex items-center gap-2">
                                  <i className="fas fa-plus text-xs"></i> {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {review.cons && review.cons.length > 0 && (
                          <div className="bg-red-50 rounded-xl p-4">
                            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                              <i className="fas fa-times-circle"></i> Cons
                            </h4>
                            <ul className="space-y-1">
                              {review.cons.map((con, i) => (
                                <li key={i} className="text-sm text-red-600 flex items-center gap-2">
                                  <i className="fas fa-minus text-xs"></i> {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                 
                    {review.images && review.images.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Customer Photos</h4>
                        <div className="flex gap-2 overflow-x-auto">
                          {review.images.map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt={`Review photo ${i + 1}`}
                              className="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                            />
                          ))}
                        </div>
                      </div>
                    )}

                
                    <div className="flex items-center gap-4 pt-4 border-t mtbrottop1q">
                      <span className="text-sm text-gray-500">Was this review helpful?</span>
                      <button
                        onClick={() => handleVote(review.id, 'helpful')}
                        className={`flex items-center gap-2 px-3 py-1 rounded-lg transition ${
                          helpfulVotes[review.id] === 'helpful'
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}>
                        <i className="fas fa-thumbs-up"></i>
                        Helpful ({review.helpful + (helpfulVotes[review.id] === 'helpful' ? 1 : 0)})
                      </button>
                      <button
                        onClick={() => handleVote(review.id, 'notHelpful')}
                        className={`flex items-center gap-2 px-3 py-1 rounded-lg transition ${
                          helpfulVotes[review.id] === 'notHelpful'
                            ? 'bg-red-100 text-red-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}>
                        <i className="fas fa-thumbs-down"></i>
                        Not Helpful ({review.notHelpful + (helpfulVotes[review.id] === 'notHelpful' ? 1 : 0)})
                      </button>
                      <button className="ml-auto text-sm text-black-500 hover:underline">
                        Report
                      </button>
                    </div>
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
