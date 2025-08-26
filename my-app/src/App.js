import React from 'react';
import './App.css';
import Navbar from '/workspaces/Meu1/my-app/src/Components/Navbar/Navbar.jsx';
import Sidebar from '/workspaces/Meu1/my-app/src/Components/Sidebar/Sidebar.jsx';
import SearchBar from '/workspaces/Meu1/my-app/src/Components/Searchbar/Searchbar.jsx';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          <SearchBar />
          {/* A área de conteúdo principal, que está vazia na sua imagem */}
        </div>
      </div>
    </div>
  );
}

export default App;