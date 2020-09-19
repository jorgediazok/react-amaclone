import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';

import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="logo">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Amaclone</Link>
          </div>
          <div className="header-links">
            <a href="/cart">CART</a>
            <a href="/login">LOGIN</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shop Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            X
          </button>
          <ul>
            <li>
              <a href="/">Pants</a>
            </li>
            <li>
              <a href="/">Shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All Rights Reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
