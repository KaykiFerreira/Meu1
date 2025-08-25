import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const categories = Array(15).fill('Todos'); // Simulando 15 botões
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>CATEGORIAS</h2>
      </div>
      <ul className="sidebar-list">
        {categories.map((category, index) => (
          <li key={index} className="sidebar-item">
            <button className="sidebar-button">{category}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;