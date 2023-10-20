import logo from "./logo.svg";
import "./App.css";

const cities = ["New York", "San Francisco"];

function App() {
  return (
    <div className="App">
      <div>
        <h1>List of Cool Cities</h1>
        <div>
          <h1>List of Cool Cities</h1>
          <ul>
            {cities.map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
