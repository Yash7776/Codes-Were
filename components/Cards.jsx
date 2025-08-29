import React from 'react'

const Cards = () => {
  return (
   <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Shop the Best Deals Online
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover the latest products with unbeatable prices
          </p>
          <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-xl shadow hover:bg-gray-100">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Clothing", "Electronics", "Shoes", "Accessories"].map((cat) => (
            <div
              key={cat}
              className="bg-white shadow rounded-xl p-6 flex items-center justify-center text-lg font-semibold text-gray-700 hover:bg-purple-50 cursor-pointer"
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((p) => (
            <div
              key={p}
              className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={`https://via.placeholder.com/300x200?text=Product+${p}`}
                alt={`Product ${p}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Product {p}
                </h3>
                <p className="text-gray-500 mb-2">$ {(p * 10).toFixed(2)}</p>
                <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-indigo-600 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
            Limited Time Offer: Get 30% Off on All Electronics!
          </h2>
          <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow hover:bg-gray-100">
            Shop Deals
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Codes-Wear.Com All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Cards
