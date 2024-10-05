import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar
        iconColor="white"
        textColor="text-white"
        buttonStyle="text-black bg-white"
      />
      <HomePage />
    </>
  );
}

export default App;
