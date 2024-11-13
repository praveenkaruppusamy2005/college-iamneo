import React from 'react';
import products from './products';

const ProductList = () => {
  // const products = [
  //   { id: 1, name: 'Toy Car', price: 10, image: '/images/toy-car.jpg' },
  //   { id: 2, name: 'Doll', price: 15, image: '/images/doll.jpg' },
  //   { id: 3, name: 'Lego Set', price: 30, image: '/images/lego-set.jpg' },
  // ];

  return (
    <div className="product-list">
      {products.map(product => (
        <product key={product.id} name={product.name} price={product.price} image={product.image} />
      ))}
    </div>
  );
};

export default ProductList;
