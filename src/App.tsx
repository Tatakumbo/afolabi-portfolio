import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Resume from './pages/Resume'
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import './index.css';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/resume' element={<Resume/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
