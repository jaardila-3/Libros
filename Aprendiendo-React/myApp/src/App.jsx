import { Provider } from "react-redux";
import Form from "./components/Form";
import ThemeButton from "./components/ThemeButton";
import ThemeProvider from "./components/ThemeProvider";
import store from "./store";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <>
      <div>
        <h2>Form with useState</h2>
        <Form />
      </div>
      <hr />
      <div>
        <ThemeProvider>
          <h2>Button with useContext and Custom Hook</h2>
          <ThemeButton />
        </ThemeProvider>
      </div>
      <hr />
      <div>
        <Provider store={store}>
          <h2>Shopping Cart with redux y redux toolkit</h2>
          <Cart />
        </Provider>
      </div>
    </>
  );
}

export default App;
