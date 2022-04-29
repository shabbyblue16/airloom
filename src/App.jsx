/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store';
import './style/index.css';
import {
  Album,
  CreateAlbum,
  Item,
  CreateItem,
  Profile,
  Login,
  Signup,
  Landing,
} from './routes';
import { NavBar, Footer } from './components';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='/login' element={<Login history={history} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/create-album' element={<CreateAlbum />} />
          <Route exact={false} path='/album' element={<Album />} />
          <Route path='/create-item' element={<CreateItem />} />
          <Route path='/item' element={<Item />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
