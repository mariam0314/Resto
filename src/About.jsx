import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function About() {
  const [count, setCount] = useState(0)
      
  return(
      
      <section className="bg-gray-50 py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <img
            src="https://i.pinimg.com/736x/1b/9f/23/1b9f2350aadf5b80647d717230030d07.jpg"
            alt="Our Story"
            className="rounded-2xl shadow-xl w-full md:w-1/2 h-auto object-cover mb-8 md:mb-0"
          />
          <div className="md:ml-12">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded with passion and precision, <span className="text-[#784a42] font-semibold">Resto</span> is more than a restaurant—it's a destination. Born from a love for food, design, and unforgettable experiences, we aim to create a space where flavors and memories blend seamlessly.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Every dish on our menu is crafted with the finest ingredients, inspired by global cuisines but rooted in local authenticity. Our team of chefs and hosts are committed to delivering excellence, whether it's your first visit or your fiftieth.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center mb-20">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            To serve exceptional cuisine in a welcoming environment, where every guest feels valued and every meal is a celebration.
          </p>
        </div>

        {/* Highlights Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <h4 className="text-2xl font-bold text-[#784a42] mb-2">20+ Years Experience</h4>
            <p className="text-gray-600">
              Decades of passion-driven culinary excellence and service refinement.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <h4 className="text-2xl font-bold text-[#784a42] mb-2">Award-Winning Chefs</h4>
            <p className="text-gray-600">
              Our chefs blend innovation and tradition, bringing stories to your plate.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <h4 className="text-2xl font-bold text-[#784a42] mb-2">Sustainable Ingredients</h4>
            <p className="text-gray-600">
              We prioritize freshness, quality, and sustainability in everything we serve.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-24">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Ready to Taste the Difference?</h3>
          <p className="text-gray-600 mb-6">Join us for an unforgettable dining experience today.</p>
         <Link to="/order " state={{ scrollToForm: true }}
            className="inline-block bg-[#784a42] text-white px-6 py-3 rounded-full hover:bg-[#5e3630] transition text-lg font-semibold"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </section>




















  )

}

export default About;