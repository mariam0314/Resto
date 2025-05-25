import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

function Header() {
  const [count, setCount] = useState(0)

return(

    <>


    
<nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center bg-[#882f20]">    

    
        <h1 className="text-2xl font-bold    text-white ">Resto    </h1>

        <ul className="flex space-x-8 text-lg font-medium  text-white">
      <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/order" className="hover:text-yellow-400">Order</Link></li>
                    <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>

        </ul>
      </nav>


    </>
)


}

export default Header