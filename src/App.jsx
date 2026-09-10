import './App.css'
import Navbar from './components/commonComponents/Navbar.jsx'
import Footer from './components/commonComponents/Footer.jsx'

import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ReqQuote from './components/contactComponents/ReqQuote.jsx'
import Shorts from './pages/products/Shorts.jsx'
import ProductDetail from './components/productComponents/ProductDetail.jsx'


function GlobalWrapper() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<GlobalWrapper />}>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/reqQuote" element={<ReqQuote />} />

          <Route path="/productdetail" element={<ProductDetail />} />

          <Route path="products/shorts" element={<Shorts />} />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App