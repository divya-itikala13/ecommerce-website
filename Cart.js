
import React from 'react';

const Cart = () => {
  return (
    <div className="container mt-5">
      <h2>Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Product Name</td>
            <td>$100.00</td>
            <td>2</td>
            <td>$200.00</td>
          </tr>
          {/* Add more rows for additional products */}
        </tbody>
      </table>
      <button className="btn btn-primary">Checkout</button>
    </div>
  );
}

export default Cart;