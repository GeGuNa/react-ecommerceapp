import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router'

interface Store {
  id: number;
  name: string;
  address: string;
  city: string;
  hours: string;
  phone: string;
  image: string;
}

const stores: Store[] = [
  {
    id: 1,
    name: 'SoHo Flagship',
    address: '123 Greene Street',
    city: 'New York, NY 10012',
    hours: 'Mon–Sat: 10am–7pm, Sun: 11am–6pm',
    phone: '(212) 555-1234',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
  },
  {
    id: 2,
    name: 'West Hollywood',
    address: '456 Melrose Avenue',
    city: 'Los Angeles, CA 90048',
    hours: 'Mon–Sat: 10am–8pm, Sun: 11am–6pm',
    phone: '(310) 555-5678',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400',
  },
  {
    id: 3,
    name: 'Wicker Park',
    address: '789 Milwaukee Avenue',
    city: 'Chicago, IL 60647',
    hours: 'Mon–Sat: 10am–7pm, Sun: 12pm–5pm',
    phone: '(773) 555-9012',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400',
  },
];

export default function Stores() {
  return (
    <>
      <Header />

      <div className="PageHero bger1">
        <h2 className="PHSize mb-4">Our Stores</h2>
        <p className="PSizeText">Visit us in person</p>
      </div>

      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold mb-8 text-center">
          Find a location near you
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Experience our furniture firsthand. Our friendly design experts are
          ready to help you create the home you've always dreamed of.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stores.map((store) => (
            <div
              key={store.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img src={store.image} alt={store.name} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {store.name}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-start gap-2">
                    <i className="fas fa-map-marker-alt mt-1 text-primary"></i>
                    <span>
                      {store.address}
                      <br />
                      {store.city}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="fas fa-clock text-primary"></i>
                    <span>{store.hours}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="fas fa-phone-alt text-primary"></i>
                    <span>{store.phone}</span>
                  </p>
                </div>
                <button className="mt-6 w-full border border-primary text-primary py-2 rounded-lg btn3q21q">
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">
            Can't visit a store?
          </h2>
          <p className="text-gray-600 mb-6">
            Our design advisors are available for virtual consultations.
            Schedule a free video call to explore our collection.
          </p>
          <button className="btn">
            Book a Virtual Appointment
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
