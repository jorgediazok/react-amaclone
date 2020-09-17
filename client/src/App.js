import React, { useState } from 'react';
import './App.css';

function App() {
  function openMenu() {
    document.querySelector('.sidebar').classList.add('open');
  }

  function closeMenu() {
    document.querySelector('.sidebar').classList.remove('open');
  }

  return (
    <div className="grid-container">
      <header className="header">
        <div className="logo">
          <button onClick={openMenu}>&#9776;</button>
          <a href="/">Amaclone</a>
        </div>
        <div className="header-links">
          <a href="/cart">CART</a>
          <a href="/login">LOGIN</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
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
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/image1.jpg"
                  alt="shirt"
                />
                <div className="product-name">
                  <a href="/product">Slim Shirt</a>
                </div>
                <div className="product-brand">Hugo Boss</div>
                <div className="product-price">$59.99</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/image6.jpg"
                  alt="shirt"
                />
                <div className="product-name">
                  <a href="/product">Slim Shirt</a>
                </div>
                <div className="product-brand">Hugo Boss</div>
                <div className="product-price">$59.99</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
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
