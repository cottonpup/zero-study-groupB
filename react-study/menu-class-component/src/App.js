import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>클래스형 컴포넌트</h1>
        <ul className="menu-bar">
          <Menu></Menu>
        </ul>
      </div>
    );
  }
}
