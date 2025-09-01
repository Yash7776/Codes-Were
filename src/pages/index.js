import Image from "next/image";
import Cards from "./Cards";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Shop by Category
          </h2>
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

        <Cards />

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

      </div>
    </>
  );
}
