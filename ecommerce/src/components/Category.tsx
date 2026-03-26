import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  itemCount: number;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Living Room',
    slug: 'living-room',
    description: 'Sofas, coffee tables, and accent pieces to elevate your space.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400',
    itemCount: 48,
  },
  {
    id: 2,
    name: 'Bedroom',
    slug: 'bedroom',
    description: 'Comfortable beds, nightstands, and dressers for restful nights.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400',
    itemCount: 36,
  },
  {
    id: 3,
    name: 'Dining',
    slug: 'dining',
    description: 'Elegant tables, chairs, and storage for memorable meals.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400',
    itemCount: 42,
  },
  {
    id: 4,
    name: 'Home Office',
    slug: 'home-office',
    description: 'Ergonomic desks, chairs, and organization solutions.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400',
    itemCount: 29,
  },
  {
    id: 5,
    name: 'Outdoor',
    slug: 'outdoor',
    description: 'Durable patio furniture and accessories for outdoor living.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400',
    itemCount: 24,
  },
  {
    id: 6,
    name: 'Lighting',
    slug: 'lighting',
    description: 'Floor lamps, pendants, and fixtures to set the mood.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400',
    itemCount: 52,
  },
  {
    id: 7,
    name: 'Decor',
    slug: 'decor',
    description: 'Mirrors, art, vases, and accents to personalize your home.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400',
    itemCount: 67,
  },
  {
    id: 8,
    name: 'Storage',
    slug: 'storage',
    description: 'Shelving, cabinets, and baskets to keep things tidy.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400',
    itemCount: 31,
  },
];

export default function CategoryList() {
  return (
    <>
      <Header />

      <div className="PageHero bger1">
        <h2 className="PHSize mb-4">Shop by Category</h2>
        <p className="PSizeText">Find exactly what you're looking for</p>
      </div>

      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold mb-4 text-center">
          Explore Our Collections
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Browse our curated categories to discover furniture and decor that
          fits your style. From cozy living rooms to productive home offices,
          we have everything you need.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.slug}`}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl font-bold">
                      {category.name}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {category.itemCount} items
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-primary font-bold text-sm group-hover:underline">
                    Shop now
                    <i className="fas fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-1"></i>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

   
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We also offer custom furniture design services. Contact our team to
            create a piece that's uniquely yours.
          </p>
          <Link to="/contact" className="btn"> Request a Custom Design</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
