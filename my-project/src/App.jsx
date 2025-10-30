import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import LandingPage from './components/landingpage';
function App() {
  
return (
    <BrowserRouter>
      {/* Your app content */}
      <Routes>
        <Route path="/" element={<LandingPage/>}  />

      </Routes>
    </BrowserRouter>
  );
}

export default App
