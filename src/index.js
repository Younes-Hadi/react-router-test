import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Books from './components/Books';
import Cds from './components/CDs';
import Book from './components/Book';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/components/Books' element={<Books/>}/>
          <Route path="/components/CDs" element={<Cds/>}/>
          <Route path='/components/Books/BookId' element={<Book/>}/>
      </Routes>    
    </BrowserRouter>
  </React.StrictMode>
);
