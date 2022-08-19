import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
//import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
