import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect,useState } from 'react'
import cloth from 'Y:/Next Js/codeswere/public/cloths.jpg'
const Cards = () => {
  const [product, setproduct] = useState([])

  useEffect(()  => {
    fetchProduct();
  },[])

  const fetchProduct= async ()=>{
      const responce  = await fetch('https://api.escuelajs.co/api/v1/products')
      const  data= await responce.json()
      console.log(data);
      setproduct(data)
  }
  
  return (
    <div className="bg-gray-50">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Featured Products
        </h2>  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {product.map((prod) =>

          <Link href={`view/${prod.title}`} className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
            <Image
              src={cloth}
              alt={`Product`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {prod.title.slice(0,25)}
              </h3>
              <p className="text-gray-500 mb-2">₹{prod.price}</p>
              <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                Add to Cart
              </button>
            </div>
          </Link>
      )}
      </div>
      </section>
    </div>
      
  )
}

export default Cards
