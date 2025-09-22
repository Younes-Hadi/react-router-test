import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Books from './components/Books';
import Cds from './components/CDs';
import Book from './components/Book';
import CD from './components/CD';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>}>
            <Route path='/Books' element={<Books/>}>
              <Route index element={
              <main style={{padding: "1rem", position:"absolute" , right:"45%", fontSize:"2rem" , fontFamily:"sans-serif"}}>
                <p>Choose your book</p>
              </main>}/>
              <Route path=':bookId' element={<Book/>}/>             
            </Route>
            <Route path="/CDs" element={<Cds/>}>
              <Route index element={
                <main style={{position:"absolute", right:"45%", textAlign:"center", fontFamily:"sans-serif" , fontSize:"2rem"}}>
                  <p>Choose your CD</p>
                </main>}/>
                <Route path=':cdId' element={<CD/>}/>
            </Route>
          </Route>
      </Routes>    
    </BrowserRouter>
  </React.StrictMode>
);
