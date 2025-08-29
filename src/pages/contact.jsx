// pages/contact.jsx


export default function Contact() {
  return (
    <>
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6 bg-white shadow rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Have questions, feedback, or need support? Fill out the form below or
          reach us directly at{" "}
          <span className="font-semibold text-purple-600">support@shop.com</span>.
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Extra Contact Info */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Other Ways to Contact</h2>
          <ul className="space-y-2 text-gray-600">
            <li>📞 Phone: +91 98765 43210</li>
            <li>🏢 Address: 123 Market Street, Mumbai, India</li>
          </ul>
        </div>
      </div>
    </div>
    </>

  );
}
