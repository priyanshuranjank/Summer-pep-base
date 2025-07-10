import React, { useState } from 'react';
import Login from './Login';

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">LPU Store</div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
        <div className="navbar-right">
          <button className="login-btn" onClick={handleLoginClick}>
            {showLogin ? 'Login' : 'Login'}
          </button>
        </div>
      </nav>
      {showLogin && <Login />}
    </>
  );
}

export default Navbar;