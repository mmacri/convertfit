import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Recovery Essentials</h3>
            <p className="text-gray-400">
              Your trusted source for honest, in-depth reviews of the best fitness recovery products.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/massage-guns" className="text-gray-400 hover:text-white">
                  Massage Guns
                </Link>
              </li>
              <li>
                <Link to="/products/foam-rollers" className="text-gray-400 hover:text-white">
                  Foam Rollers
                </Link>
              </li>
              <li>
                <Link to="/products/fitness-bands" className="text-gray-400 hover:text-white">
                  Fitness Bands
                </Link>
              </li>
              <li>
                <Link to="/products/compression-gear" className="text-gray-400 hover:text-white">
                  Compression Gear
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Recovery Essentials. All rights reserved.</p>
          <p className="mt-2">
            This site contains affiliate links. We may earn a commission if you make a purchase through these links.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
