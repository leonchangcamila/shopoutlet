import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  return (
    <Navbar />
    <ItemListContainer producto="Camperas" precio="5000"/>

  );
};

export default App;
