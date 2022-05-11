import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemCount from "./components/ItemCount";

const App = () => {
  return (

    <Navbar />
    <ItemCount />
    <ItemListContainer producto="Camperas" precio="5000"/>

  );

export default App;
