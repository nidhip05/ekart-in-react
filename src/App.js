import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import AllWeather from "./components/AllWeather";
import Login from "./components/buttons/Login";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Section8 from "./components/HomePage/Section8";
import Navbar from "./components/Navbar";
import NewIn from "./components/NewIn";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import Rain from "./components/Rain";
import Snow from "./components/Snow";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<ProductDetail />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/newin" element={<NewIn />} />
        <Route exact path="/rain" element={<Rain />} />
        <Route exact path="/snow" element={<Snow />} />
        <Route exact path="/allweather" element={<AllWeather />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Section8 />
      <Footer />
    </div>
  );
}

export default App;
