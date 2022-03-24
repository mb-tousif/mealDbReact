import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import { FaSistrix } from "react-icons/fa";
import Foods from './Components/foods/Foods';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header></Header>
      </div>
      <div className="input-group w-50 mt-3 mx-auto">
        <input id="search-input" type="search" className="form-control" placeholder="Search your food..."/>
        <button id="search-button" type="button" className="btn bg-info"><FaSistrix />
        </button>
      </div>
      <Foods></Foods>
    </div>
  );
}

export default App;
