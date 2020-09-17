import React from 'react';
import './App.css';

function App() {
  return (
    <div className="grid-container">
      <header className="header">
        <div className="logo">
          <a href="/">Amaclone</a>
        </div>
        <div className="header-links">
          <a href="/cart">Cart</a>
          <a href="/login">Login</a>
        </div>
      </header>
      <main className="main">
        <ul>
          <li>Product 1</li>
        </ul>
      </main>
      <footer className="footer">All Rights Reserved</footer>
    </div>
  );
}

export default App;
