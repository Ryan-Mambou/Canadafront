import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Study from './Pages/Study';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import Arrived from './Pages/Arrived';
import About from './Pages/About'; 
import Immigration from './Pages/Immigration';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Nav from './Components/Nav';
import Search from './Components/Search';

function App() {
  return (
    <BrowserRouter>
    <Search />
    <Nav />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/arrived' element={<Arrived />}/>
      <Route path='/study' element={<Study />}/>
      <Route path='/work' element={<Work />}/>
      <Route path='/immigration' element={<Immigration />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
