import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const calculateTotalCost = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Plants: {totalItems}</p>
      <p>Total Cost: ₹{calculateTotalCost()}</p>

      {cart.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity + 1
                })
              )
            }
          >
            +
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              item.quantity > 1
                ? dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity - 1
                    })
                  )
                : dispatch(removeItem(item.id))
            }
          >
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
      <button>Checkout</button>
    </div>
  );
};

export default CartItem;
