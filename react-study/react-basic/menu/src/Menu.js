import React, { useState } from 'react';

function Menu() {
  const [selectedTab, setSelectedTab] = useState(0);

  const menu = ['all', 'images', 'video'];

  return (
    <ul className="menu-bar">
      {menu.map((item) => (
        <li
          className={selectedTab === item.length ? 'selected' : ''}
          onClick={() => setSelectedTab(item.length)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
