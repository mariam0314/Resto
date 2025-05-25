  import { Routes, Route } from 'react-router-dom';
  import Header from './assets/Header.jsx';
  import Footer from './assets/footer.jsx';
  import Home from './Home.jsx';
  import About from './About.jsx';
  import Order from './order.jsx';
  import Contact from './Contact.jsx'
  import './App.css';

  function App() {
    return (
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact   />} />
        </Routes>
        <Footer/>
      </div>
    );
  }

  export default App;
