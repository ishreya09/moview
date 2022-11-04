import './App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home';
import Card from './Card';
import MovieList from './MovieList';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <MovieList></MovieList>
      <Footer></Footer>
    </div>
  );
}

export default App;
