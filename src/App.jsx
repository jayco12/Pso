
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Home/navbar';
import Home from './components/Home/home';
import { About } from './components/Home/About';
import { Contact } from './components/Home/Contact';
import { Footer } from './components/Home/Footer';
import Ministry  from './components/Ministry/home';
function App() {
  return (
    <>
   
     <BrowserRouter>
     <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/ministry" element={<Ministry/>} />
</Routes>
      <Contact/>
      <Footer/>
</BrowserRouter>
</>

  );
}

export default App;
