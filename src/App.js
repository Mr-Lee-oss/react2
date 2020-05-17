import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  render() {
  return (
    <div className="gray-background">
      <img src={logo} lat="logo"/>
      <h2>시작</h2>
    </div>
    );
  }
}

export default App;
