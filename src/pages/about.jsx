// pages/about.jsx

export default function About() {
  return (
    <>
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-6 bg-white shadow rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Welcome to <span className="font-semibold text-purple-600">ShopEase</span>,
          your one-stop online store for all your shopping needs. We aim to bring
          you the best quality products at the most affordable prices.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Our mission is simple: to make online shopping easy, fun, and affordable.
          From fashion to electronics, we carefully curate products to ensure
          customer satisfaction.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Choose Us?</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
          <li>✅ Wide range of high-quality products</li>
          <li>✅ Secure payments & easy checkout</li>
          <li>✅ Fast delivery & hassle-free returns</li>
          <li>✅ 24/7 customer support</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in 2023, ShopEase started with a vision to bring a reliable and
          enjoyable shopping experience to customers all over India. Today, we
          proudly serve thousands of happy shoppers every month.
        </p>
      </div>
    </div>
    </>
  );
}
