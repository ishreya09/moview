import './App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home';
import Card from './Card';
import MovieList from './MovieList';
import ReviewPage from './ReviewPage';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ContactUs from './ContactUs';

function App() {
  var cast=[{id:"1",actor:"abc"},{id:"2",actor:"def"},{id:"3",actor:"efg"}];
  var review=[{id:"1",review:"movie is great"},{id:"2",review:"movie is great"},{id:"3",review:"movie is great"} ]
  return (
    <div className="App">
      <Navbar></Navbar>
      <ContactUs />
      <Footer></Footer>
    </div>
  );
}

export default App;
