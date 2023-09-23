import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const Products = ["zapatos", "camiseta", "gorra"];

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <button onClick={() => handleRemoveFromCart(item)}>
            Remove from cart
          </button>
        </div>
      ))}
      <div>
        <h2>Products</h2>
        {Products.map((item, index) => (
          <div key={index}>
            <h3>{item}</h3>
            <button onClick={() => handleAddToCart({ id: index, name: item })}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
