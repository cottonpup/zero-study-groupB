import React, { useState } from 'react';

function Menu() {
  const [selectedTab, setSelectedTab] = useState(0);

  const menu = ['all', 'images', 'video'];

  return (
    <>
      {menu.map((item) => (
        <li
          className={selectedTab === item.length ? 'selected' : ''}
          onClick={() => setSelectedTab(item.length)}
        >
          {item}
        </li>
      ))}
    </>
  );
}

export default Menu;
