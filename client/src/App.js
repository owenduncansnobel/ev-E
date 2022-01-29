import Navbar from "./components/navbar";
import ScatterMap from "./components/scattermap";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ScatterMap width={500} height={400} />
    </div>
  );
}

export default App;
