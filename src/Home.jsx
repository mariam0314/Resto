import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Home() {
  const [count, setCount] = useState(0)

return(
<>
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen text-white flex items-center justify-center" style={{ backgroundImage: "url('https://i.pinimg.com/736x/95/13/87/9513873c915dcb653d78e1e45dc23256.jpg')" }}>
        <div className="bg-[#784a42] bg-opacity-50 p-10 rounded-xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Resto  </h1>
          <p className="text-xl mb-6">Experience the finest cuisine with us</p>
            <Link to="/order " state={{ scrollToForm: true }}>
  <button className="bg-[#c2a9a6] hover:bg-[#472b27] text-black font-semibold py-3 px-6 rounded-lg transition duration-300">
    Book a Table
  </button>
</Link>

        </div>
      </section>


      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">Signature Dishes</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Truffle Pasta",
              image: "https://i.pinimg.com/736x/f7/4b/fe/f74bfefa0263867e443a34a049c4cf96.jpg",
              price: "$24",
            },
            {
              name: "Grilled Salmon",
              image: "https://i.pinimg.com/736x/b8/2c/30/b82c3085dcab26b572d5deb415ecfb37.jpg",
              price: "$28",
            },
            {
              name: "Classic Cheesecake",
              image: "https://i.pinimg.com/736x/25/61/2e/25612eca3bf606d5171ec1310965a1f5.jpg",
              price: "$12",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-60 object-cover" />
              <div className="p-6">
             
                <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
                <p className="text-lg text-yellow-600 font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}

      {/* Footer */}
      
    </div>


</>
)
}
export default Home;
