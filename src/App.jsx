import React from 'react';
import { Link } from 'react-router-dom';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <h1>Airloom</h1>
      <nav className="navbar">
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}

export default App;
