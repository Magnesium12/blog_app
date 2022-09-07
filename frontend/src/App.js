import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import NavBar from "./components/navbar";
import Home from "./pages/home_page"
import BlogDetail from './pages/blog_page';
import Login from './pages/login_page';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

const xyz = {
  "title": "",
  "author": null,
  "content": "",
  "stars": null
}

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path = '/' element={<Home></Home>}></Route>
        <Route path = '/login' element={<Login></Login>}></Route>
        <Route path = '/blog/:id' element={<BlogDetail></BlogDetail>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
