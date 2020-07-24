import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary"></Navbar>
      <div className="container">
        <NavbarBrand href="/">Ristaurant Con Fusion</NavbarBrand>
      </div>
    </div>
  );
}

export default App;
