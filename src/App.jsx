import { BrowserRouter, Link } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './styles/App.css';
import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="App">
            <header className="main-header">
              <div className="header-content">
                <div className="logo-container">
                  <h1>ShopEase</h1>
                </div>
                <button className="nav-toggle" onClick={toggleNav}>
                  <span className="hamburger"></span>
                </button>
                <nav className={`main-nav ${isNavOpen ? 'nav-open' : ''}`}>
                  <ul>
                    <li><Link to="/" onClick={toggleNav}>Home</Link></li>
                    <li><Link to="/catalogue" onClick={toggleNav}>Catalogue</Link></li>
                    <li><Link to="/cart" onClick={toggleNav}>Cart</Link></li>
                    <li><Link to="/login" onClick={toggleNav}>Login</Link></li>
                    <li><Link to="/register" onClick={toggleNav}>Register</Link></li>
                    <li><Link to="/about" onClick={toggleNav}>About</Link></li>
                  </ul>
                </nav>
              </div>
            </header>
            <main className="main-content">
              <div className="content-wrapper">
                <AppRoutes />
              </div>
            </main>
            <footer className="main-footer">
              <div className="footer-content">
                <div className="footer-section">
                  <h3>Contact Us</h3>
                  <p>Email: support@shopease.com</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
                <div className="footer-section">
                  <h3>Follow Us</h3>
                  <div className="social-links">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                  </div>
                </div>
                <div className="footer-section">
                  <p>&copy; 2025 ShopEase. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;