import React, { useState } from 'react';

const BannerManagement = () => {
  const [banner, setBanner] = useState(null);

  const handleBannerChange = (e) => {
    setBanner(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <h2>Thay banner</h2>
      <input type="file" onChange={handleBannerChange} />
      {banner && (
        <img src={banner} alt="Banner Preview" style={{ width: '100%', marginTop: '10px' }} />
      )}
    </div>
  );
};

export default BannerManagement;
