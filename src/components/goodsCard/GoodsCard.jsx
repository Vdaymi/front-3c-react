import React from 'react';
import './style.css';

function GoodsCard({ image, name, price }) {
    return (
        <div className="goods-card">
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>Ціна: {price}₴</p>
        </div>
    );
}

export default GoodsCard;
