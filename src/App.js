import './App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
      {/* <Routes> */}
        {/* <Route exact path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About/>}/> */}
        {/* <Route path="/contact" element={<Contact/>}/> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
