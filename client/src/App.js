import React from 'react';
import data from './data';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

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
          <ul className="products">
            {data.products.map((product) => (
              <li>
                <div className="product">
                  <img
                    className="product-image"
                    src={product.image}
                    alt="shirt"
                  />
                  <div className="product-name">
                    <a href="/product">{product.name}</a>
                  </div>
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-price">{product.price}</div>
                  <div className="product-rating">
                    {product.rating} Stars {product.numReviews}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="footer">All Rights Reserved</footer>
    </div>
  );
}

export default App;
