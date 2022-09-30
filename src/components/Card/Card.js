import React from 'react';

const Card = ({ product }) => {
    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h6 className="card-title">Tk. {product.price}</h6>
                <p className="card-text">{product.description}</p>
            </div>
        </div>
    );
};

export default Card;