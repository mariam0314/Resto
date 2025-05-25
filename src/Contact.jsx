import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [count, setCount] = useState(0)
      
  return(
    <section className="bg-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            We'd love to hear from you! Whether it's a reservation, question, or feedback — feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#784a42]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#784a42]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="5"
                  placeholder="Your message here..."
                  className="mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#784a42]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#784a42] hover:bg-[#5c322d] text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Contact Information</h3>
              <p className="text-gray-700 mb-2">
                📍 Sahara Lane, AL Marina beach, Burj Al Dubai, UAE
              </p>
              <p className="text-gray-700 mb-2">📞 +971 (05772-92758) </p>
              <p className="text-gray-700">✉️ resto0512@gmail.in </p>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Resto Location"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7227.490878536116!2d55.125811037903574!3d25.07661572874978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f14a9eb066263%3A0x39b616c78f7fe064!2sMarina%20Beach!5e0!3m2!1sen!2snl!4v1748195086911!5m2!1sen!2snl"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;





