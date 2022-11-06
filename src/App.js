import './App.css';
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import MovieList from './components/MovieList/MovieList';
import Navbar from './components/NavBar/Navbar';
import ReviewPage from './components/ReviewPage/ReviewPage';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ContactUs from './components/ContactUs/ContactUs';


function App() {
  var cast=[{id:"1",actor:"abc"},{id:"2",actor:"def"},{id:"3",actor:"efg"}];
  var review=[{id:"1",review:"movie is great"},{id:"2",review:"movie is great"},{id:"3",review:"movie is great"} ]
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="movie/:id" element={<ReviewPage></ReviewPage>}></Route>
          <Route path="/movies" element={<MovieList></MovieList>}></Route>
          <Route path="/movies/:type" element={<MovieList></MovieList>}></Route>
          <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
          <Route path="/*" element={<h1>404: Page Not Found</h1>}></Route>

        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
