
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductView() {
  const router = useRouter();
  const { id } = router.query; // product id from URL
  const [pin, setpin] = useState()
  const [flag, setflag] = useState()

  const checkAvability = async ()=>{
    console.log(pin);
    const response= await fetch('http://127.0.0.1:3000/api/pincode');
    const data= await response.json();
    if(data.includes(parseInt(pin))){
      setflag(true)
    }
    else{
      setflag(false)
    }
  }

  const getPin=(e)=>{
    setpin(e.target.value);
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Product Images */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Product"
            className="w-full h-96 object-cover rounded-xl shadow"
          />
          <div className="flex space-x-4 mt-4">
            {[1, 2, 3].map((n) => (
              <img
                key={n}
                src={`https://via.placeholder.com/100x80?text=Img+${n}`}
                alt="Thumb"
                className="w-24 h-20 object-cover rounded-lg border hover:border-purple-600 cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Awesome Product {id}
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            This is a detailed description of the product. Highlight its key
            features, quality, and why customers will love it.
          </p>
          <p className="text-2xl font-semibold text-purple-600 mb-6">
            $ {(id * 20).toFixed(2)}
          </p>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center space-x-4 mb-6">
            <label className="text-gray-700 font-medium">Quantity:</label>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 border rounded-lg px-2 py-1 text-center"
            />
          </div>

          <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow hover:bg-purple-700 transition">
            Add to Cart
          </button>

          {/* Extra info */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Product Details
            </h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>High quality material</li>
              <li>1-year warranty included</li>
              <li>Free shipping & returns</li>
            </ul>

            <div className="space-x-2 mt-1.5">
              <input className="w-40 h-10/12 border-blue-500" type="tel" value={pin} onChange={getPin}/>
              <button className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-xl shadow hover:bg-purple-700 transition" onClick={checkAvability}>Check Avability</button>

             
                  {(!flag && flag!=null) && 
                    <div className="text-red-700 font-medium">Service is not reachable</div>
                  }
                  {(flag && flag!=null) && 
                    <div className="text-green-700 font-medium">Service is reachable</div>
                  }

            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Related Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((p) => (
            <div
              key={p}
              className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={`https://via.placeholder.com/300x200?text=Product+${p}`}
                alt={`Product ${p}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold text-gray-700">
                  Product {p}
                </h3>
                <p className="text-purple-600 font-medium mb-2">
                  $ {(p * 15).toFixed(2)}
                </p>
                <button className="w-full px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
