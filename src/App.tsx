import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {ItemCountContext} from './hooks/ItemCountContext';
import About from './view/About/About';
import Contact from './view/Contact/Contact';
import Home from './view/Home/Home';
import Items from './view/Items/Items';
import NoPage from './view/NoPage/NoPage';

function App() {
  document.title = 'MakEat';

  return (
    <BrowserRouter>
      <ItemCountContext.Provider value={0}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="items" element={<Items />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </ItemCountContext.Provider>
    </BrowserRouter>
  );
}

export default App;
