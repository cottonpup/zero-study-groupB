import React, { Component } from 'react';
// 클래스형 컴포넌트!

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    };
  }

  menu = ['all', 'images', 'video'];

  render() {
    return (
      <>
        {this.menu.map((item) => (
          <li
            className={this.state.selectedTab === item.length ? 'selected' : ''}
            onClick={() => this.setState({ selectedTab: item.length })}
          >
            {item}
          </li>
        ))}
      </>
    );
  }
}
