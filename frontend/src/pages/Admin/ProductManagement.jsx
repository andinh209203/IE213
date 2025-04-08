import React, { useState } from 'react';

const ProductManagement = () => {
  const [products, setProducts] = useState([]); // Danh sách sản phẩm
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' });

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({ name: '', price: '', description: '' });
  };

  return (
    <div>
      <h2>Quản lý sản phẩm</h2>
      <div>
        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Giá"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <textarea
          placeholder="Mô tả"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <button onClick={handleAddProduct}>Thêm sản phẩm</button>
      </div>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price} - {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManagement;
