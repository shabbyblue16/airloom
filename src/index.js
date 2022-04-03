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
  Album,
  CreateAlbum,
  CreateItem,
  Profile,
  Login,
  Signup,
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
        <Route exact={false} path='/album' element={<Album />} />
        <Route path='create-item' element={<CreateItem />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
