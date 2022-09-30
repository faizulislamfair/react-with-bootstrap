import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        { id: 1, name: 'Mac Book Pro', price: 145000, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil' },
        { id: 2, name: 'Razer', price: 175000, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab' },
        { id: 3, name: 'MSI', price: 195000, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident doloribus aliquam' }
    ]

    return (
        <div className="card-group">
            {
                products.map(product => <Card
                    key={product.id}
                    product={product}
                ></Card>)
            }
        </div>
    );
};

export default CardGroup;