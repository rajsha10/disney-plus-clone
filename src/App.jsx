import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<>
              <Login />
            </>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
