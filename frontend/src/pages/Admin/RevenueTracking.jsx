import React from 'react';

const RevenueTracking = () => {
  const revenueData = [
    { date: '2025-04-01', total: 5000 },
    { date: '2025-04-02', total: 7000 },
  ];

  return (
    <div>
      <h2>Theo dõi doanh thu</h2>
      <table>
        <thead>
          <tr>
            <th>Ngày</th>
            <th>Doanh thu</th>
          </tr>
        </thead>
        <tbody>
          {revenueData.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.total} VND</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RevenueTracking;
