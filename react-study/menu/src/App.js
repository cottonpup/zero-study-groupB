// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <h1>함수형 컴포넌트</h1>
      <ul className="menu-bar">
        <Menu></Menu>
      </ul>
    </div>
  );
}

export default App;
