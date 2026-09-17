import logo from './logo.svg';
import './App.css';
import Navigation from "./customer/component/Navigation";
import HomePage from "./customer/component/Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
           <Navigation />
    <div>
      <HomePage/>
    </div>
    </div>

  );
}

export default App;
