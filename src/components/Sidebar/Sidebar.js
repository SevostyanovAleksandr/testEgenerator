import React from 'react';
import { FaHome, FaYoutube, FaBookmark, FaBell, FaCommentDots } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { name: 'Лента', icon: <FaHome /> },
    { name: 'Каналы', icon: <FaYoutube /> },
    { name: 'Видео', icon: <FaYoutube /> },
    { name: 'Сохраненное', icon: <FaBookmark /> },
    { name: 'Уведомления', icon: <FaBell /> },
    { name: 'Чаты', icon: <FaCommentDots /> },
  ];

  return (
    <nav className="sidebar">
      <div className="sidebar__logo">MT.ru</div>
      <div className="sidebar__menu">
        {menuItems.map((item, index) => (
          <div key={index} className="sidebar__item">
            <span className="sidebar__icon">{item.icon}</span>
            <span className="sidebar__text">{item.name}</span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;