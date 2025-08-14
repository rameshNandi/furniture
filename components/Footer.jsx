// Footer.jsx
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  HomeIcon,
  InformationCircleIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Solusi Furniture
            </h4>
            <p className="text-gray-400">
              Premium furniture to transform your space with comfort, style, and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h5 className="font-semibold text-white">Quick Links</h5>
            <div className="space-y-2">
              <a href="/" className="flex items-center text-gray-400 hover:text-yellow-400">
                <HomeIcon className="w-5 h-5 mr-2" /> Home
              </a>
              <a href="/about" className="flex items-center text-gray-400 hover:text-yellow-400">
                <InformationCircleIcon className="w-5 h-5 mr-2" /> About
              </a>
              <a href="/products" className="flex items-center text-gray-400 hover:text-yellow-400">
                <ShoppingBagIcon className="w-5 h-5 mr-2" /> Products
              </a>
              <a href="/contact" className="flex items-center text-gray-400 hover:text-yellow-400">
                <UserIcon className="w-5 h-5 mr-2" /> Contact
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h5 className="font-semibold text-white">Categories</h5>
            <div className="space-y-2">
              <a href="/products" className="flex items-center text-gray-400 hover:text-yellow-400">
                <HomeIcon className="w-5 h-5 mr-2" /> Bedroom
              </a>
              <a href="/products" className="flex items-center text-gray-400 hover:text-yellow-400">
                <HomeIcon className="w-5 h-5 mr-2" /> Living Room
              </a>
              <a href="/products" className="flex items-center text-gray-400 hover:text-yellow-400">
                <HomeIcon className="w-5 h-5 mr-2" /> Dining Room
              </a>
              <a href="/products" className="flex items-center text-gray-400 hover:text-yellow-400">
                <HomeIcon className="w-5 h-5 mr-2" /> Office
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h5 className="font-semibold text-white">Contact Info</h5>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2" /> 123 Furniture Street
              </p>
              <p>City, State 12345</p>
              <p className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2" /> (555) 123-4567
              </p>
              <p className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 mr-2" /> info@solusi.com
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Solusi Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
