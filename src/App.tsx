import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Resume from './pages/Resume'
import './index.css';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/resume' element={<Resume/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
