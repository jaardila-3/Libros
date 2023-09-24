import { Provider } from "react-redux";
import store from "../../store";
import Cart from "../cart";
import Navbar from "../molecules/Navbar";

const Redux = () => {
  return (
    <>
      <Navbar />
      <div>
        <Provider store={store}>
          <h2>Shopping Cart with redux y redux toolkit</h2>
          <Cart />
        </Provider>
      </div>
    </>
  );
};

export default Redux;
