import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const categories = [
    'Todos',
    'Amendo Chef',
    'Bombons Happy',
    'Chocomais',
    'Chokiss',
    'Coloreti',
    'Coloreti Ball',
    'Croc-Choc',
    'Doces de Amendoim',
    'Ducrem',
    'Granulados',
    'Pingo de Leite',
    'Snacks de Amendoim',
    'Tetop e Top Mellow'
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Categorias</h2>
      </div>
      <ul className="sidebar-list">
        {categories.map((category, index) => (
          <li key={index} className="sidebar-item">
            <button className="sidebar-button">
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;