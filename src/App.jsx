import { useState } from "react";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <>
      {!showProducts ? (
        <div className="landing">
          <h1>Paradise Nursery</h1>
          <AboutUs />
          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </>
  );
}

export default App;
