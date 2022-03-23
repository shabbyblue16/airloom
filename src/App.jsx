import React from 'react';
// import { Link } from 'react-router-dom';
import { Landing, NavBar } from './components';
import './style/App.css';

function App() {
  return (
    <div className="App">
      {/* <nav className="navbar">
        <Link to="/login">Login</Link>
      </nav> */}
      <NavBar />
      <Landing />
    </div>
  );
}

export default App;
