import './App.css'
import { useEffect } from 'react'

import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import { useLocation } from "react-router-dom";


import Navbar from './components/commonComponents/Navbar.jsx'
import Footer from './components/commonComponents/Footer.jsx'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductDetail from './components/productComponents/ProductDetail.jsx'
import RequestQuoteModal from "./components/commonComponents/RequestQuoteModal.jsx";
import ProductPage from './pages/products/ProductPage.jsx';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



function GlobalWrapper() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <RequestQuoteModal />
    </>
  )
}


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>

        <Route element={<GlobalWrapper />}>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/products/:slug" element={<ProductPage />} />

          <Route path="/productdetail" element={<ProductDetail />} />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App