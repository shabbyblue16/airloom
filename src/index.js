/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/index.css';
import App from './App';
import { CreateAlbum, Login } from './routes';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="createAlbum" element={<CreateAlbum />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
