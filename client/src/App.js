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
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/image2.jpg"
                  alt="shirt"
                />
                <div className="product-name">
                  <a href="/product">Slim Shirt</a>
                </div>
                <div className="product-brand">Hugo Boss</div>
                <div className="product-price">$59.99</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">All Rights Reserved</footer>
    </div>
  );
}

export default App;