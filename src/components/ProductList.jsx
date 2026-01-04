import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plantsData = [
  {
    category: "Indoor Plants",
    items: [
      {
        id: 1,
        name: "Snake Plant",
        price: 300,
        image: "https://via.placeholder.com/100"
      },
      {
        id: 2,
        name: "Money Plant",
        price: 200,
        image: "https://via.placeholder.com/100"
      }
    ]
  },
  {
    category: "Medicinal Plants",
    items: [
      {
        id: 3,
        name: "Aloe Vera",
        price: 150,
        image: "https://via.placeholder.com/100"
      },
      {
        id: 4,
        name: "Tulsi",
        price: 120,
        image: "https://via.placeholder.com/100"
      }
    ]
  },
  {
    category: "Decorative Plants",
    items: [
      {
        id: 5,
        name: "Bonsai",
        price: 500,
        image: "https://via.placeholder.com/100"
      },
      {
        id: 6,
        name: "Peace Lily",
        price: 350,
        image: "https://via.placeholder.com/100"
      }
    ]
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <header>
        <h2>Our Plants</h2>
        <Link to="/cart">🛒 Cart ({totalItems})</Link>
      </header>

      {plantsData.map((category) => (
        <div key={category.category}>
          <h3>{category.category}</h3>

          {category.items.map((plant) => (
            <div key={plant.id}>
              <img src={plant.image} alt={plant.name} />
              <h4>{plant.name}</h4>
              <p>₹{plant.price}</p>
              <button onClick={() => dispatch(addItem(plant))}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
