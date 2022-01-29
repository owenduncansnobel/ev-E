import Navbar from "./components/navbar";
import Home from './views/home';
import Title from './views/title';
import searchBar from "./components/search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <searchBar />
      <Home />
    </div>
  );
}

export default App;
