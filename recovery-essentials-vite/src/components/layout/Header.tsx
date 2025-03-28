import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-indigo-600 flex items-center justify-center rounded">
                <span className="text-white font-bold">RE</span>
              </div>
              <div className="ml-2">
                <div className="font-bold text-gray-800">Recovery Essentials</div>
                <div className="text-xs text-gray-500">Best Recovery Products & Reviews</div>
              </div>
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:block" id="main-navigation">
            <ul className="flex space-x-6">
              <li className="relative group">
                <Link
                  to="/products/massage-guns"
                  className="font-medium text-gray-700 hover:text-indigo-600 py-2 inline-block"
                >
                  Massage Guns <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </Link>
                <ul className="absolute left-0 top-full bg-white border rounded-md shadow-md p-2 min-w-max hidden group-hover:block">
                  <li><Link to="/products/massage-guns" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md">All Massage Guns</Link></li>
                </ul>
              </li>
              <li><Link to="/products/foam-rollers" className="font-medium text-gray-700 hover:text-indigo-600 py-2 inline-block">Foam Rollers</Link></li>
              <li><Link to="/products/fitness-bands" className="font-medium text-gray-700 hover:text-indigo-600 py-2 inline-block">Fitness Bands</Link></li>
              <li><Link to="/products/compression-gear" className="font-medium text-gray-700 hover:text-indigo-600 py-2 inline-block">Compression Gear</Link></li>
              <li><Link to="/products/comparison" className="font-medium text-gray-700 hover:text-indigo-600 py-2 inline-block">Compare</Link></li>
              <li><Link to="/blog" className="font-medium text-gray-700 hover:text-indigo-600 py-2 inline-block">Blog</Link></li>
              <li><Link to="/about" className="font-medium text-gray-700 hover:text-indigo-600 py-2 inline-block">About</Link></li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="bg-white h-full w-64 p-4 transform transition-transform duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl">Menu</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-600 hover:text-indigo-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="space-y-2">
              <li><Link to="/products/massage-guns" className="block py-2 text-gray-700 hover:text-indigo-600">Massage Guns</Link></li>
              <li><Link to="/products/foam-rollers" className="block py-2 text-gray-700 hover:text-indigo-600">Foam Rollers</Link></li>
              <li><Link to="/products/fitness-bands" className="block py-2 text-gray-700 hover:text-indigo-600">Fitness Bands</Link></li>
              <li><Link to="/products/compression-gear" className="block py-2 text-gray-700 hover:text-indigo-600">Compression Gear</Link></li>
              <li><Link to="/products/comparison" className="block py-2 text-gray-700 hover:text-indigo-600">Compare</Link></li>
              <li><Link to="/blog" className="block py-2 text-gray-700 hover:text-indigo-600">Blog</Link></li>
              <li><Link to="/about" className="block py-2 text-gray-700 hover:text-indigo-600">About</Link></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
