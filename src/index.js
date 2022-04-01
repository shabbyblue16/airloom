/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store';
import './style/index.css';
import App from './App';
import {
  CreateAlbum,
  Login,
  Signup,
  GrandmasHouse,
} from './routes';
import { NavBar } from './components';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route path='/login' element={<Login history={history} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/create-album' element={<CreateAlbum />} />
        <Route path='/grandmas-house' element={<GrandmasHouse />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
