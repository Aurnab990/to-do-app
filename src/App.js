
import './App.css';
import { Routes, Route, } from "react-router-dom";
import Header from './Components/Home/Header';
import Navbar from './Components/Home/Navbar';
import Alltodo from './Components/Alltodo';


function App() {
  return (

    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/alltodo' element={<Alltodo></Alltodo>}></Route>
      </Routes>
    </div>
  );
}

export default App;
