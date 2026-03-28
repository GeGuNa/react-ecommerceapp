import { useState, useMemo, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

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
  { id: 4, name: 'Floor Lamp Brass', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300', averageRating: 4.6, totalReviews: 156 },
  { id: 5, name: 'Upholstered Bed Frame', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300', averageRating: 4.9, totalReviews: 521 },
];

interface FormData {
  productId: number | null;
  rating: number;
  title: string;
  content: string;
  pros: string[];
  cons: string[];
  wouldRecommend: boolean;
  verifiedPurchase: boolean;
  photos: string[];
  authorName: string;
  authorEmail: string;
}

export default function AddReview() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<FormData>({
    productId: id ? Number(id) : null,
    rating: 0,
    title: '',
    content: '',
    pros: [''],
    cons: [''],
    wouldRecommend: true,
    verifiedPurchase: false,
    photos: [],
    authorName: '',
    authorEmail: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  const product = useMemo(() => 
    products.find(p => p.id === formData.productId), 
    [formData.productId]
  );

  const renderStars = (rating: number, interactive = false, size = 'lg') => (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => interactive && setFormData({ ...formData, rating: star })}
          onMouseEnter={() => interactive && setHoveredRating(star)}
          onMouseLeave={() => interactive && setHoveredRating(0)}
          className={`${interactive ? 'cursor-pointer hover:scale-125 transition-transform' : 'cursor-default'} focus:outline-none`}
          disabled={!interactive}>
          <i
            className={`fas fa-star ${
              star <= (hoveredRating || rating) ? 'text-yellow-400' : 'text-gray-300'
            } ${size === 'xl' ? 'text-4xl' : size === 'lg' ? 'text-2xl' : 'text-lg'}`}></i>
          </button>
      ))}
    </div>
  );

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.productId) {
      newErrors.productId = 'Please select a product';
    }

    if (formData.rating === 0) {
      newErrors.rating = 'Please select a rating';
    }

    if (!formData.title.trim()) {
      newErrors.title = 'Please enter a review title';
    } else if (formData.title.length < 5) {
      newErrors.title = 'Title must be at least 5 characters';
    } else if (formData.title.length > 100) {
      newErrors.title = 'Title must be less than 100 characters';
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Please write your review';
    } else if (formData.content.length < 20) {
      newErrors.content = 'Review must be at least 20 characters';
    } else if (formData.content.length > 2000) {
      newErrors.content = 'Review must be less than 2000 characters';
    }

    if (!formData.authorName.trim()) {
      newErrors.authorName = 'Please enter your name';
    }

    if (!formData.authorEmail.trim()) {
      newErrors.authorEmail = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.authorEmail)) {
      newErrors.authorEmail = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);


    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);

  
    setTimeout(() => {
      navigate(`/reviews/${formData.productId}`);
    }, 3000);
  };

  const handleAddPro = () => {
    setFormData({ ...formData, pros: [...formData.pros, ''] });
  };

  const handleRemovePro = (index: number) => {
    setFormData({ ...formData, pros: formData.pros.filter((_, i) => i !== index) });
  };

  const handleProChange = (index: number, value: string) => {
    const newPros = [...formData.pros];
    newPros[index] = value;
    setFormData({ ...formData, pros: newPros });
  };

  const handleAddCon = () => {
    setFormData({ ...formData, cons: [...formData.cons, ''] });
  };

  const handleRemoveCon = (index: number) => {
    setFormData({ ...formData, cons: formData.cons.filter((_, i) => i !== index) });
  };

  const handleConChange = (index: number, value: string) => {
    const newCons = [...formData.cons];
    newCons[index] = value;
    setFormData({ ...formData, cons: newCons });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPhotos = Array.from(files).map(file => URL.createObjectURL(file));
      setFormData({ ...formData, photos: [...formData.photos, ...newPhotos].slice(0, 5) });
    }
  };

  const handleRemovePhoto = (index: number) => {
    setFormData({ ...formData, photos: formData.photos.filter((_, i) => i !== index) });
  };

  const resetForm = () => {
    setFormData({
      productId: null,
      rating: 0,
      title: '',
      content: '',
      pros: [''],
      cons: [''],
      wouldRecommend: true,
      verifiedPurchase: false,
      photos: [],
      authorName: '',
      authorEmail: '',
    });
    setErrors({});
    setSubmitSuccess(false);
    setShowPreview(false);
  };

  if (submitSuccess) {
    return (
      <>
        <Header />
        
        
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-lg w-full text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-check text-4xl text-green-500"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Review Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your feedback. Your review will be published after moderation.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                to={`/reviews/${formData.productId}`}
                className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-black transition">
                View All Reviews
              </Link>
              <button
                onClick={resetForm}
                className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition">
                Write Another Review
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

   


     
      <div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white py-12 mrg81frhero">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-4">
            <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold">
               Share Your Experience
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Write a Review</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Help other customers make informed decisions by sharing your honest feedback
          </p>
        </div>
      </div>


<div class="mrtpzqoq332"></div>

      <div className="container mx-auto px-4 py-8 ">
      
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
         
          {Object.keys(errors).length > 0 && (
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <i className="fas fa-exclamation-circle text-red-500 text-xl"></i>
                <div>
                  <h3 className="font-bold text-red-700 mb-2">Please fix the following errors:</h3>
                  <ul className="text-red-600 space-y-1">
                    {Object.values(errors).map((error, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <i className="fas fa-circle text-xs"></i> {error}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

         
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                <span className="text-black-600 font-bold">1</span>
              </span>
              Select Product
            </h2>
            
            {formData.productId ? (
              <div className="flex items-center gap-6 p-6 bg-indigo-50 rounded-xl border-2 border-indigo-200">
                <img src={product?.image} alt={product?.name} className="w-24 h-24 object-cover rounded-xl" />
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900">{product?.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    {renderStars(product?.averageRating || 0, false, 'sm')}
                    <span className="text-sm text-gray-600">({product?.totalReviews} reviews)</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, productId: null })}
                  className="text-red-500 hover:text-red-700 font-semibold">
                  Change
                </button>
              </div>
            ) : (
              <div>
                <select
                  value={formData.productId || ''}
                  onChange={(e) => setFormData({ ...formData, productId: e.target.value ? Number(e.target.value) : null })}
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:outline-none text-lg ${
                    errors.productId ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-black-600'
                  }`}>
                  <option value="">Choose a product...</option>
                  {products.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
                {errors.productId && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <i className="fas fa-exclamation-circle"></i> {errors.productId}
                  </p>
                )}
              </div>
            )}
          </div>

        
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                <span className="text-black-600 font-bold">2</span>
              </span>
              Your Rating
            </h2>
            
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4 text-lg">How would you rate this product?</p>
              <div className="flex justify-center mb-4">
                {renderStars(formData.rating, true, 'xl')}
              </div>
              <p className="text-black-600 font-semibold">
                {formData.rating === 1 && '😞 Poor'}
                {formData.rating === 2 && '😐 Fair'}
                {formData.rating === 3 && '😊 Good'}
                {formData.rating === 4 && '😄 Very Good'}
                {formData.rating === 5 && '🤩 Excellent'}
                {formData.rating === 0 && 'Select a rating'}
              </p>
              {errors.rating && (
                <p className="text-red-500 text-sm mt-2 flex items-center justify-center gap-1">
                  <i className="fas fa-exclamation-circle"></i> {errors.rating}
                </p>
              )}
            </div>

           
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <p className="font-semibold text-gray-700 mb-4">Would you recommend this product?</p>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, wouldRecommend: true })}
                  className={`flex-1 py-4 rounded-xl font-semibold transition flex items-center justify-center gap-2 ${
                    formData.wouldRecommend
                      ? 'bg-green-500 text-white'
                      : 'bg-white border-2 border-gray-200 hover:border-green-300'
                  }`}>
                  <i className="fas fa-thumbs-up"></i> Yes, I recommend it
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, wouldRecommend: false })}
                  className={`flex-1 py-4 rounded-xl font-semibold transition flex items-center justify-center gap-2 ${
                    !formData.wouldRecommend
                      ? 'bg-red-500 text-white'
                      : 'bg-white border-2 border-gray-200 hover:border-red-300'
                  }`}>
                  <i className="fas fa-thumbs-down"></i> No, I don't recommend it
                </button>
              </div>
            </div>
          </div>

         
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                <span className="text-black-600 font-bold">3</span>
              </span>
              Write Your Review
            </h2>

          
            <div className="mb-6">
              <label className="block font-semibold text-gray-700 mb-2">
                Review Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Summarize your experience in a few words"
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none ${
                  errors.title ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-black-600'
                }`}
              />
              <div className="flex justify-between mt-1">
                {errors.title ? (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <i className="fas fa-exclamation-circle"></i> {errors.title}
                  </p>
                ) : <span></span>}
                <span className={`text-sm ${formData.title.length > 100 ? 'text-red-500' : 'text-gray-500'}`}>
                  {formData.title.length}/100
                </span>
              </div>
            </div>

            
            <div className="mb-6">
              <label className="block font-semibold text-gray-700 mb-2">
                Your Review <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Share details about your experience with this product..."
                rows={6}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none resize-none ${
                  errors.content ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-black-600'
                }`}
              />
              <div className="flex justify-between mt-1">
                {errors.content ? (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <i className="fas fa-exclamation-circle"></i> {errors.content}
                  </p>
                ) : <span></span>}
                <span className={`text-sm ${formData.content.length > 2000 ? 'text-red-500' : 'text-gray-500'}`}>
                  {formData.content.length}/2000
                </span>
              </div>
            </div>

           
            <div className="mb-6">
              <label className="block font-semibold text-gray-700 mb-2">
                What did you like? (Pros)
              </label>
              <div className="space-y-2">
                {formData.pros.map((pro, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={pro}
                      onChange={(e) => handleProChange(index, e.target.value)}
                      placeholder="e.g., Comfortable, Great Quality"
                      className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-black-600"
                    />
                    {formData.pros.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemovePro(index)}
                        className="px-4 py-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition">
                        <i className="fas fa-times"></i>
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={handleAddPro}
                className="mt-2 text-black-500 hover:text-indigo-700 font-semibold flex items-center gap-2">
                <i className="fas fa-plus"></i> Add Another Pro
              </button>
            </div>

          
            <div className="mb-6">
              <label className="block font-semibold text-gray-700 mb-2">
                What could be improved? (Cons)
              </label>
              <div className="space-y-2">
                {formData.cons.map((con, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={con}
                      onChange={(e) => handleConChange(index, e.target.value)}
                      placeholder="e.g., Expensive, Assembly Difficult"
                      className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-black-600"
                    />
                    {formData.cons.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveCon(index)}
                        className="px-4 py-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition">
                        <i className="fas fa-times"></i>
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={handleAddCon}
                className="mt-2 text-black-500 hover:text-indigo-700 font-semibold flex items-center gap-2">
                <i className="fas fa-plus"></i> Add Another Con
              </button>
            </div>

           
            <div className="mb-6">
              <label className="block font-semibold text-gray-700 mb-2">
                Add Photos (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-indigo-400 transition cursor-pointer"
                onClick={() => fileInputRef.current?.click()}>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
                <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-2"></i>
                <p className="text-gray-600">Click to upload photos</p>
                <p className="text-sm text-gray-400">Max 5 photos, JPG/PNG up to 5MB each</p>
              </div>
              {formData.photos.length > 0 && (
                <div className="flex gap-2 mt-4 overflow-x-auto">
                  {formData.photos.map((photo, index) => (
                    <div key={index} className="relative flex-shrink-0">
                      <img src={photo} alt={`Upload ${index + 1}`} className="w-24 h-24 object-cover rounded-xl" />
                      <button
                        type="button"
                        onClick={() => handleRemovePhoto(index)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition">
                        <i className="fas fa-times text-xs"></i>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                <span className="text-black-600 font-bold">4</span>
              </span>
              Your Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.authorName}
                  onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none ${
                    errors.authorName ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-black-600'
                  }`}
                />
                {errors.authorName && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <i className="fas fa-exclamation-circle"></i> {errors.authorName}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.authorEmail}
                  onChange={(e) => setFormData({ ...formData, authorEmail: e.target.value })}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none ${
                    errors.authorEmail ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-black-600'
                  }`}
                />
                {errors.authorEmail && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <i className="fas fa-exclamation-circle"></i> {errors.authorEmail}
                  </p>
                )}
              </div>
            </div>

          
            <div className="mt-6 p-4 bg-green-50 rounded-xl">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.verifiedPurchase}
                  onChange={(e) => setFormData({ ...formData, verifiedPurchase: e.target.checked })}
                  className="w-5 h-5 rounded border-2 border-gray-300 text-green-500 focus:ring-green-500"
                />
                <div>
                  <span className="font-semibold text-gray-700">I verified purchased this product</span>
                  <p className="text-sm text-gray-500">Your review will be marked as a verified purchase</p>
                </div>
              </label>
            </div>
          </div>

          
          <div className="bg-indigo-50 rounded-2xl p-6 mb-6 border border-indigo-100">
            <h3 className="font-bold text-indigo-700 mb-4 flex items-center gap-2">
              <i className="fas fa-info-circle"></i> Review Guidelines
            </h3>
            <ul className="space-y-2 text-sm text-black-600">
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-green-500 mt-1"></i>
                <span>Be honest and share your真实 experience</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-green-500 mt-1"></i>
                <span>Focus on the product, not shipping or seller</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-green-500 mt-1"></i>
                <span>Don't include personal information</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-check text-green-500 mt-1"></i>
                <span>Reviews are moderated before publishing</span>
              </li>
            </ul>
          </div>

        
          <div className="flex flex-col md:flex-row gap-4">
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold  transition flex items-center justify-center gap-2">
              <i className="fas fa-eye"></i>
              {showPreview ? 'Hide Preview' : 'Preview Review'}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 py-4 rounded-xl font-semibold text-lg transition flex items-center justify-center gap-2 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-black text-white hover:bg-black'
              }`}>
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Submitting...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> Submit Review
                </>
              )}
            </button>
          </div>
        </form>

        
        {showPreview && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowPreview(false)}>
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="p-6 border-b flex items-center justify-between">
                <h3 className="text-xl font-bold">Review Preview</h3>
                <button onClick={() => setShowPreview(false)} className="text-gray-400 hover:text-gray-600">
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              <div className="p-6">
                
                {product && (
                  <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div>
                      <p className="font-semibold">{product.name}</p>
                      {renderStars(product.averageRating, false, 'sm')}
                    </div>
                  </div>
                )}

               
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">Your Rating</p>
                  {renderStars(formData.rating, false, 'xl')}
                </div>

               
                <h4 className="text-xl font-bold text-gray-900 mb-2">{formData.title || 'No title'}</h4>
                <p className="text-gray-600 mb-6 whitespace-pre-wrap">{formData.content || 'No content'}</p>

               
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {formData.pros.filter(p => p.trim()).length > 0 && (
                    <div className="bg-green-50 rounded-xl p-4">
                      <h5 className="font-semibold text-green-700 mb-2">Pros</h5>
                      <ul className="space-y-1">
                        {formData.pros.filter(p => p.trim()).map((pro, i) => (
                          <li key={i} className="text-sm text-green-600 flex items-center gap-2">
                            <i className="fas fa-plus text-xs"></i> {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {formData.cons.filter(c => c.trim()).length > 0 && (
                    <div className="bg-red-50 rounded-xl p-4">
                      <h5 className="font-semibold text-red-700 mb-2">Cons</h5>
                      <ul className="space-y-1">
                        {formData.cons.filter(c => c.trim()).map((con, i) => (
                          <li key={i} className="text-sm text-red-600 flex items-center gap-2">
                            <i className="fas fa-minus text-xs"></i> {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

          
                {formData.photos.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Photos</p>
                    <div className="flex gap-2 overflow-x-auto">
                      {formData.photos.map((photo, i) => (
                        <img key={i} src={photo} alt={`Preview ${i + 1}`} className="w-20 h-20 object-cover rounded-lg" />
                      ))}
                    </div>
                  </div>
                )}

                
                <div className="flex items-center gap-4 pt-6 border-t">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-black-500"></i>
                  </div>
                  <div>
                    <p className="font-semibold">{formData.authorName || 'Anonymous'}</p>
                    <div className="flex items-center gap-2">
                      {formData.verifiedPurchase && (
                        <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <i className="fas fa-check-circle"></i> Verified Purchase
                        </span>
                      )}
                      {formData.wouldRecommend && (
                        <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                          Recommends
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t bg-gray-50">
                <button
                  onClick={() => setShowPreview(false)}
                  className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-black transition">
                  Looks Good, Submit!
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div class="mrtpzqoq332"></div>

      <Footer />
    </>
  );
}
