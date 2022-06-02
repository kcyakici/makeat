import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {CartProvider} from './hooks/CartProvider';
import About from './view/About/About';
import Contact from './view/Contact/Contact';
import Home from './view/Home/Home';
import Items from './view/Items/Items';
import NoPage from './view/NoPage/NoPage';

function App() {
  document.title = 'MakEat';

  return (
    <BrowserRouter>
      <CartProvider>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="items" element={<Items />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
