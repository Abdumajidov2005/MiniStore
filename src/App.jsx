import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Shop from "./pages/Shop/Shop"
import Error from "./pages/Error/Error"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
