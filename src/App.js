import './App.css';
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import MovieList from './components/MovieList/MovieList';
import Navbar from './components/NavBar/Navbar';
import ReviewPage from './components/ReviewPage/ReviewPage';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ContactUs from './components/ContactUs/ContactUs';
import ReviewMovie from './components/ReviewPage/ReviewMovie';
import LoginForm from './components/Login/LoginForm';
import SignupForm from './components/SignUp/SignupForm';
import ThankYou from './components/ContactUs/ThankYou';
import Logout from './components/Logout/Logout';
import Cookies from 'js-cookie';
import SetCookie from './SetCookie';
import AdminContact from './components/Admin/AdminContactTable';
import AdminUser from './components/Admin/AdminUserTable';
import AdminMovie from './components/Admin/AdminMovieTable';
import Admin from './components/Admin/Admin';
import AddMovieForm from './components/Admin/AdminAddMovie';

function App() {
  var cast = [{ id: "1", actor: "abc" }, { id: "2", actor: "def" }, { id: "3", actor: "efg" }];
  var review = [{ id: "1", review: "movie is great" }, { id: "2", review: "movie is great" }, { id: "3", review: "movie is great" }]

  if(Cookies.get('username') == undefined){
    SetCookie();
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="movies/:id" element={<ReviewMovie></ReviewMovie>}></Route>
          <Route path="/movies" element={<MovieList></MovieList>}></Route>
          {/* <Route path="/movies/:type" element={<MovieList></MovieList>}></Route> */}
          <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
          <Route path="/contactus/thank-you" element={<ThankYou></ThankYou>}></Route>
          <Route path="/signup" element={<SignupForm ></SignupForm>}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/admin/contacttable" element={<AdminContact />}></Route>
          <Route path="/admin/movietable" element={<AdminMovie />}></Route>
          <Route path="/admin/usertable" element={<AdminUser />}></Route>
          <Route path="/admin/addmovie" element={<AddMovieForm />}></Route>
          <Route path="/login" element={<LoginForm></LoginForm>}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/*" element={<h1>404: Page Not Found</h1>}></Route>

        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
