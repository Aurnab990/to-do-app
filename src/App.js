
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header';
import SignIn from './Components/SignIn';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
