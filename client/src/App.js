import Navbar from "./components/navbar";
import Home from './views/home';
import Title from './views/title';
import Description from "./views/description";
function App() {
  return (
    <div className="App bg-zinc-900">
      <Navbar />
      <Title />
      <searchBar />
      <Home />
      <Description />
    </div>
  );
}

export default App;
