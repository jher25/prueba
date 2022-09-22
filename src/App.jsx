import logo from "./logo.svg";
import "./App.css";
import PantallaPrueba from "./PantallaPrueba/PantallaPrueba";
import { Routes, Route } from "react-router-dom"; //intalar: npm install react-router-dom
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PantallaPrueba />}></Route>
      </Routes>
    </div>
  );
}

export default App;

//<div>
//  <Routes>
//    <Route path="/PantallaPrueba" element={<PantallaPrueba />} />
//  </Routes>
//</div>
