import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import './style/App.css';

function App() {
  return (
    <div className="App">
      {/* <nav className="navbar">
        <Link to="/login">Login</Link>
      </nav> */}
      <NavBar />
      <main>
        <div>
          <img alt='main' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1vSFTfgLOixYh833CEhfon5UwxFdfg9Qpw&usqp=CAU' />
        </div>
        <div>
          <p>
            Airloom provides space to tell stories of the things that store memories
            we share with one another.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
