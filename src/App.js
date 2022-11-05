import './App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home';
import Card from './Card';
import MovieList from './MovieList';
import ReviewPage from './ReviewPage';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  var cast=[{id:"1",actor:"abc"},{id:"2",actor:"def"},{id:"3",actor:"efg"}];
  var review=[{id:"1",review:"movie is great"},{id:"2",review:"movie is great"},{id:"3",review:"movie is great"} ]
  return (
    <div className="App">
      <Navbar></Navbar>
      <ReviewPage image="https://images.pexels.com/photos/9420597/pexels-photo-9420597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      video="https://www.youtube.com/watch?v=NcE83Txe-3g" 
      title="Harry Potter" summary="sdfhb dewuyfgewugdwsu Lorem lorem rem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi laudantium recusandae mollitia sint exercitationem magni nostrum ex tempora repellendus, provident illum doloremque quod, laboriosam itaque molestiae, at possimus voluptate commodi perspiciatis. Fugiat quo magnam at unde possimus? Fuga perferendis fesfwegueqhuw grebge" 
      rating={5} genre="children, fantasy" duration="2hrs 30mins"
      review={review} language="English" castinfo={cast} >description as child of the component
      Lorem lorem rem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi laudantium recusandae mollitia sint exercitationem magni nostrum ex tempora repellendus, provident illum doloremque quod, laboriosam itaque molestiae, at possimus voluptate commodi perspiciatis. Fugiat quo magnam at unde possimus? Fuga perferendis rerum facere rem, qui sapiente. Fugit, labore est veniam corrupti rem sit ullam nam? Voluptas, autem! Similique ex mollitia sed, eius praesentium neque tempora dolore hic minus ullam, laborum est reiciendis doloremque quos odit saepe cum distinctio totam quae delectus. Deleniti sit, praesentium voluptas nobis in nesciunt cumque sunt excepturi at, obcaecati eligendi alias facere perspiciatis fugit voluptate nam quaerat quia aliquid aut placeat illum cupiditate mollitia provident. Doloribus ut deserunt a, culpa impedit praesentium minima facilis reiciendis ratione! Soluta sequi dignissimos repellendus, quae ipsa nobis officiis! Quasi atque odio, amet tempora aut assumenda sit ea sapiente est? Repudiandae mollitia assumenda ad dignissimos. Explicabo, libero adipisci? Voluptates error nostrum iusto cum ea accusantium autem possimus quisquam aspernatur voluptatem enim, dolores obcaecati numquam praesentium placeat libero omnis exercitationem sed, voluptatibus
      </ReviewPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
