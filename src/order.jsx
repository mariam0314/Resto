import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Order() {
   const location = useLocation();
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [orderFormVisible, setOrderFormVisible] = useState(false); // New state for order form
  const formRef = useRef(null); // for scrolling

  const dishes = [
    { id: 1, name: "Majboos", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I7KXnZnjSzJYoB5Mqb7KT8kmgpM56n5WaQ&s", price: "AED 70" },
    { id: 2, name: "Harees", image: "https://i.pinimg.com/736x/1f/7a/84/1f7a843e69d73cf919c08b2d9b4413ea.jpg", price: "AED 50" },
    { id: 3, name: "Madrouba", image: "https://www.maggiarabia.com/sites/default/files/styles/home_stage_1500_700/public/srh_recipes/81b30372059f0199300a4fb0b85e0862.jpg?h=4f5b30f1&itok=rIXoHF-C", price: "AED 40" },
    { id: 4, name: " Jareesh", image: "https://thumbs.dreamstime.com/b/delicious-saudi-arabian-chicken-kabsa-traditional-dish-featuring-roasted-quarter-crunchy-almonds-taste-flavors-arabia-346669605.jpg", price: "AED 50" },
    { id: 5, name: "Margoog (Margoga)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF--GUCjT-d1Ud4098ZoCOoz2Xx9oYB2fN1A&s", price: "AED 45" },
    { id: 6, name: "Balaleet", image: "https://thumbs.dreamstime.com/b/traditional-arabic-breakfast-balaleet-sweet-vermicelli-saffron-cardamom-egg-omelette-copy-space-emirati-food-high-quality-368908911.jpg?w=768", price: "AED 35" },
    { id: 7, name: "Thareed", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc6-uiqRykrBlPRVCZKF68qkGS843FMmdGCw&s", price: "AED 40" },
    { id: 8, name: "Samak Mashwi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnqt13WOpb23YR5qzr_9rVWkBYbS6TgY4AKg&s", price: "AED 90" },
    { id: 9, name: "Machboos Diyay", image: "https://everylittlecrumb.com/wp-content/uploads/chickenmachboos-8.jpg", price: "AED 40 " },
    { id: 10, name: "Luqaimat", image: "https://i.ytimg.com/vi/OfJskHbsjpg/sddefault.jpg", price: "AED 45 " },
    { id: 11, name: "Khanfaroosh (or Khunafa-roosh)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTcrIKs6b22UKtOMbEzbAvt7yO-Bgd-dZiHA&s", price: "AED 40" },
    { id: 12, name: "Chocolate Fondant (Molten Lava Cake)", image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy-chocolate-molten-cakes-37a25eb.jpg?quality=90", price: "AED 80" },
  ];

   useEffect(() => {
    if (location.state?.scrollToForm) {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  const handleOrder = (dish) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === dish.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...dish, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">Order Your Meal</h1>
        <div className="flex gap-2">
          <button
            onClick={toggleCart}
            className="bg-[#a7716b] text-white px-4 py-2 rounded hover:bg-[#774944]"
          >
            Cart ({totalItems})
          </button>
          <button
            onClick={scrollToForm}
            className="bg-[#774944] text-white px-4 py-2 rounded hover:bg-[#dcada0]"
          >
            Book Table
          </button>
        </div>
      </header>

      {/* Cart Panel */}
      {cartVisible && (
        <div className="bg-  shadow p-4 max-w-3xl mx-auto mt-4 rounded">
          <h3 className="text-lg font-bold text-gray-700 mb-2">🛒 Cart Details</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul className="space-y-2">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <span className="font-semibold">{item.name}</span> &nbsp;
                      <span className="text-sm text-gray-500">Qty: {item.quantity}</span>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:underline text-sm"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              {/* Place Order Button */}
              {cartItems.length > 0 && (
                <>
                  <div className="mt-4">
                    <button
                      onClick={() => setOrderFormVisible(true)}
                      className="bg-[#c59384] text-white px-4 py-2 rounded hover:bg-[#6f5047]"
                    >
                      Place Final Order
                    </button>
                  </div>

                  {/* Order Details Form */}
                  {orderFormVisible && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        alert("✅ Order placed successfully!");
                        setOrderFormVisible(false);
                      }}
                      className="mt-4 space-y-3 bg-gray-50 p-4 rounded"
                    >
                      <div className="flex flex-col">
                        <label className="text-gray-600 mb-1">Phone Number</label>
                        <input type="tel" placeholder="Enter phone number" required className="border p-2 rounded" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-gray-600 mb-1">Delivery Address</label>
                        <textarea placeholder="Enter full address" required className="border p-2 rounded" />
                      </div>
                      <button
                        type="submit"
                        className="bg-[#5e433b] text-white px-4 py-2 rounded hover:bg-[#cf8d7a]"
                      >
                        Confirm Order
                      </button>
                    </form>
                  )}
                </>
              )}
            </>
          )}
        </div>
      )}

      {/* Dish Cards */}
      <main className="p-6 max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold mb-6 text-gray-700">Popular Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden flex flex-col"
            >
              <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col justify-between flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{dish.name}</h3>
                <div className="mt-2 text-gray-600">{dish.price}</div>
                <button
                  onClick={() => handleOrder(dish)}
                  className="mt-4 bg-[#c9674c] text-white py-2 rounded hover:bg-[#7c402f]"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Book a Table Form */}
      <section
        ref={formRef}
        className="bg-gray-200 mt-10 p-6 rounded-xl shadow max-w-2xl mx-auto"
      >
        <h2 className="text-5xl font-bold mb-4 text-Black text-center  ">Book a Table</h2>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("✅ Table booked successfully!");
            e.target.reset(); // Optional: clears the form
          }}
        >
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Name</label>
            <input type="text" placeholder="Your Name" className="border p-2 rounded focus:outline-none" required />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Email</label>
            <input type="email" placeholder="you@example.com" className="border p-2 rounded focus:outline-none" required />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Phone</label>
            <input type="tel" placeholder="123-456-7890" className="border p-2 rounded focus:outline-none" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">Date</label>
              <input type="date" className="border p-2 rounded focus:outline-none" required />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">Time</label>
              <input type="time" className="border p-2 rounded focus:outline-none" required />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Guests</label>
            <input type="number" placeholder="No. of Guests" className="border p-2 rounded focus:outline-none" min="1" required />
          </div>
          <button
            type="submit"
            className="bg-[#a7716b] text-white px-6 py-2 rounded hover:bg-[#543431] w-full"
          >
            Submit Reservation
          </button>
        </form>
      </section>
    </div>
  );
}

export default Order;
