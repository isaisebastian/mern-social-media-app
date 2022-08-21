import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import { AuthProvider } from './context/auth';

import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import MenuBar from './components/MenuBar';

import AuthRoute from './util/AuthRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/register' element={<AuthRoute />}>
              <Route exact path='/register' element={<Register />} />
            </Route>
            <Route exact path='/login' element={<AuthRoute />}>
              <Route exact path='/login' element={<Login />} />
            </Route>
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
