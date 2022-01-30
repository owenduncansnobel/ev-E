import Navbar from "./components/navbar";
import Home from './views/home';
import Title from './views/title';

function App() {
  return (
    <div className="App bg-zinc-900">
      <Navbar />
      <Title />
      <searchBar />
      <Home />
    </div>
  );
}

export default App;
