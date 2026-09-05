import './App.css'
import Navbar from './components/commonComponents/Navbar.jsx'
import Footer from './components/commonComponents/Footer.jsx'

import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

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

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App