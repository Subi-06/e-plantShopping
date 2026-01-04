import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  { id: 1, name: "Snake Plant", price: 300 },
  { id: 2, name: "Money Plant", price: 200 },
  { id: 3, name: "Aloe Vera", price: 150 },
  { id: 4, name: "Tulsi", price: 120 },
  { id: 5, name: "Bonsai", price: 500 },
  { id: 6, name: "Peace Lily", price: 350 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <header>
        <h2>Our Plants</h2>
        <Link to="/cart">Go to Cart</Link>
      </header>

      {plants.map(plant => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>₹{plant.price}</p>
          <button onClick={() => dispatch(addItem(plant))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
