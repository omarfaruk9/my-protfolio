import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/Home/About/About';
import Contact from './pages/Home/Contact/Contact';
import Footer from './pages/Home/Footer/Footer';
import ProjectsDetails from './pages/ProjectsDetails/ProjectsDetails';
import Blog from './pages/Home/Blog/Blog';
import NavMenu from './pages/Shared/Navbar/NavMenu';
import MySkills from './pages/Home/MySkills/MySkills';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/skill' element={<MySkills></MySkills>}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/projectDetals/:projectId' element={<ProjectsDetails></ProjectsDetails>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
