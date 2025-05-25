import React, { useState } from 'react'; 

function Footer() {
  const [count, setCount] = useState(0)

  return (

<>
<footer className="bg-[#882f20] text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Resto. All rights reserved.</p>
      </footer>












</>












  )
  }

export default Footer








