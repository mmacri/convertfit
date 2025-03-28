 ogimport { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-bg text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find the Best Home Recovery Products for Your Fitness Journey</h1>
            <p className="text-xl mb-8">
              Discover top-rated massage guns, foam rollers, compression gear, and more to help
              you recover faster and perform better.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products/massage-guns"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium inline-block"
              >
                Shop Massage Guns
              </Link>
              <Link
                to="/products/comparison"
                className="bg-indigo-700 text-white hover:bg-indigo-800 px-6 py-3 rounded-md font-medium inline-block"
              >
                Compare Top Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Explore Recovery Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Category 1 */}
            <Link to="/products/massage-guns" className="group">
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                  <img
                    src="https://ext.same-assets.com/1001010121/massage-gun-category.jpg"
                    alt="Massage Guns"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    Massage Guns
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Percussive therapy devices for targeted muscle relief
                  </p>
                </div>
              </div>
            </Link>

            {/* Category 2 */}
            <Link to="/products/foam-rollers" className="group">
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                  <img
                    src="https://ext.same-assets.com/1001010122/foam-roller-category.jpg"
                    alt="Foam Rollers"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    Foam Rollers
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Self-myofascial release tools for full-body recovery
                  </p>
                </div>
              </div>
            </Link>

            {/* Category 3 */}
            <Link to="/products/compression-gear" className="group">
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                  <img
                    src="https://ext.same-assets.com/1001010123/compression-gear-category.jpg"
                    alt="Compression Gear"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    Compression Gear
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Boost circulation and reduce soreness with compression
                  </p>
                </div>
              </div>
            </Link>

            {/* Category 4 */}
            <Link to="/products/fitness-bands" className="group">
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                  <img
                    src="https://ext.same-assets.com/1001010124/fitness-bands-category.jpg"
                    alt="Fitness Bands"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    Fitness Bands
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Versatile resistance bands for strength and recovery
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Recovery Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="aspect-w-3 aspect-h-2 bg-gray-200">
                <img
                  src="https://ext.same-assets.com/1001010126/theragun-pro.jpg"
                  alt="Theragun Pro"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Theragun Pro</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-amber-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">4.5 (245 reviews)</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Professional-grade percussive therapy device with 60lbs of force and smart app integration.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-indigo-600">$599.00</span>
                  <Link
                    to="/products/massage-guns/theragun-pro"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="aspect-w-3 aspect-h-2 bg-gray-200">
                <img
                  src="https://ext.same-assets.com/1001010127/hypervolt-2.jpg"
                  alt="Hyperice Hypervolt 2"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Hyperice Hypervolt 2</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-amber-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">4.0 (187 reviews)</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Bluetooth-enabled percussion massage device with 3 speeds and 5 interchangeable heads.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-indigo-600">$299.00</span>
                  <Link
                    to="/products/massage-guns/hypervolt-2"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="aspect-w-3 aspect-h-2 bg-gray-200">
                <img
                  src="https://ext.same-assets.com/1001010128/renpho-massage-gun.jpg"
                  alt="RENPHO Massage Gun"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">RENPHO Massage Gun</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-amber-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">4.3 (1,245 reviews)</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Affordable percussion massage gun with 20 speed levels and 6 massage heads.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-indigo-600">$99.99</span>
                  <Link
                    to="/products/massage-guns/renpho"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Recovery Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Link to="/blog/foam-rolling-guide" className="group">
              <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img
                    src="https://ext.same-assets.com/1001010131/foam-rolling-guide-thumb.jpg"
                    alt="Complete Foam Rolling Guide"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-indigo-600 font-medium">Guides</span>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-indigo-600 transition-colors">
                    Complete Foam Rolling Guide for Recovery
                  </h3>
                  <p className="text-gray-600 mt-3">
                    Learn the most effective foam rolling techniques to relieve muscle tension and improve recovery times.
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm text-gray-500">May 15, 2023</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">12 min read</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Article 2 */}
            <Link to="/blog/massage-gun-techniques" className="group">
              <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img
                    src="https://ext.same-assets.com/1001010132/massage-gun-techniques-thumb.jpg"
                    alt="Massage Gun Techniques"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-indigo-600 font-medium">Techniques</span>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-indigo-600 transition-colors">
                    10 Massage Gun Techniques for Faster Recovery
                  </h3>
                  <p className="text-gray-600 mt-3">
                    Maximize your massage gun with these targeted techniques for common problem areas and recovery needs.
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm text-gray-500">June 2, 2023</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">9 min read</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Article 3 */}
            <Link to="/blog/active-vs-passive-recovery" className="group">
              <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img
                    src="https://ext.same-assets.com/1001010133/active-vs-passive-thumb.jpg"
                    alt="Active vs Passive Recovery"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-indigo-600 font-medium">Recovery</span>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-indigo-600 transition-colors">
                    Active vs. Passive Recovery: When to Use Each
                  </h3>
                  <p className="text-gray-600 mt-3">
                    Understand the difference between active and passive recovery and how to strategically use both for optimal results.
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm text-gray-500">May 28, 2023</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">8 min read</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
            >
              View all articles
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated on Recovery Tips</h2>
            <p className="text-lg mb-8">
              Join our newsletter for expert recovery advice, product recommendations, and exclusive deals.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300 flex-grow"
              />
              <button
                type="submit"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm mt-4 text-indigo-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
