import ThemeButton from "../atoms/ThemeButton";
import ThemeProvider from "../contextAPI/ThemeProvider";
import Form from "../molecules/Form";
import Navbar from "../molecules/Navbar";

const Hooks = () => {
  return (
    <>
      <Navbar />
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
    </>
  );
};

export default Hooks;
