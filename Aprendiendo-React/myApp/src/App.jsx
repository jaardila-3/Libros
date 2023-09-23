import Form from "./components/Form";
import ThemeButton from "./components/ThemeButton";
import ThemeProvider from "./components/ThemeProvider";

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
    </>
  );
}

export default App;
