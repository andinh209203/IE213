import React, { useState } from 'react';
import ProductManagement from './ProductManagement';
import BannerManagement from './BannerManagement';
import RevenueTracking from './RevenueTracking';
import OrderProcessing from './OrderProcessing';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('products'); // Tab mặc định

  return (
    <div>
      <h1>Admin Page</h1>
      <nav>
        <button onClick={() => setActiveTab('products')}>Quản lý sản phẩm</button>
        <button onClick={() => setActiveTab('banner')}>Thay banner</button>
        <button onClick={() => setActiveTab('revenue')}>Theo dõi doanh thu</button>
        <button onClick={() => setActiveTab('orders')}>Xử lý đặt hàng</button>
      </nav>
      <div>
        {activeTab === 'products' && <ProductManagement />}
        {activeTab === 'banner' && <BannerManagement />}
        {activeTab === 'revenue' && <RevenueTracking />}
        {activeTab === 'orders' && <OrderProcessing />}
      </div>
    </div>
  );
};

export default Admin;
