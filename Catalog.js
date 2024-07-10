
import React, { useState, useEffect } from 'react';

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Example: Fetching products from an API
    // Replace with your actual API endpoint or data
    fetch('https://api.example.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products', error));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Catalog</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">${product.price}</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
