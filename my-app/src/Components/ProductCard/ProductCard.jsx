import React from 'react';
import './ProductCard.css';

const ProductCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">Pingo de Leite</h3>
        <div className="card-buttons">
          <button className="card-button edit-button">Editar</button>
          <button className="card-button delete-button">Excluir</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;