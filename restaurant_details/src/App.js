import logo from './logo.svg';
import './App.css';
import { Restaurant } from './components/Restaurant';
import data from "./data/data.json"

function App() {
  return (
    <div className="App">
      <Restaurant {...data} />
    </div>
  );
}

export default App;
