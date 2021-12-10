import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show.js';

ReactDOM.render(
  <BrowserRouter>
    <div>
          <div className='App'>
            <nav className='Navbar'>
              <h2>Board App</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/create">Create</Link>
              </li>
            </ul>
            </nav>
            <hr />
            <Routes>
              <Route exact path="/" element={<App/>} />
              <Route exact path="/edit/:id" element={<Edit/>} />
              <Route exact path="/create" element={<Create/>} />
              <Route exact path="/show/:id" element={<Show/>} />
            </Routes>
          </div>
      </div>,
      </BrowserRouter>,
      document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

reportWebVitals();
