import './App.css';
import MainLandingPage from './Components/LandingPage/MainLandingPage';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLandingPage/>}/>
      <Route path='/about' element={<AboutUs/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
