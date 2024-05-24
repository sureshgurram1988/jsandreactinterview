import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [isActive, setIsActive] = useState(0);
  const handleClick = (index) => {
    setIsActive(index);
  };
  const items = [
    {
      title: 'Item 1',
      content: 'Content for item 1...',
    },
    {
      title: 'Item 2',
      content: 'Content for item 2...',
    },
    {
      title: 'Item 3',
      content: 'Content for item 3...',
    },
  ];
  const tabItems = items.map((item, index) => (
    <div className="" onClick={() => handleClick(index)}>
      {item.title}
    </div>
  ));
  const tabContent = items.map((item, index) => (
    <div className={`content ${index === isActive ? 'active' : ''}`}>
      {item.content}
    </div>
  ));
  return (
    <div className="tabs">
      <div className="tab-item">{tabItems}</div>
      <div className="tab-content">{tabContent}</div>
    </div>
  );
}
