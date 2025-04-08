import React, { useState } from 'react';

const OrderProcessing = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'Nguyen Van A', status: 'Pending' },
    { id: 2, customer: 'Tran Thi B', status: 'Completed' },
  ]);

  const handleUpdateStatus = (id, status) => {
    setOrders(orders.map((order) => (order.id === id ? { ...order, status } : order)));
  };

  return (
    <div>
      <h2>Xử lý đặt hàng</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.customer} - {order.status}
            <button onClick={() => handleUpdateStatus(order.id, 'Completed')}>Hoàn thành</button>
            <button onClick={() => handleUpdateStatus(order.id, 'Cancelled')}>Hủy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderProcessing;
