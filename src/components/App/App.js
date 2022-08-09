import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home.js';
import Comics from '../Comics/Comics.js';
import Movies from '../Movies/Movies.js';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="comics" element={ <Comics /> } />
        <Route path="movies" element={ <Movies /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
