import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import { IoMenuSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';
import '../../style/components/Products/ProductMenu.scss';
ProductMenu.propTypes = {
  onCategoryClick: PropTypes.func.isRequired,
};
function ProductMenu(props) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  const handleClick = (category, subCategory = '') => {
    console.log(`${category} - ${subCategory}`);
    // Lưu trạng thái trước đó của activeCategory
    const prevActiveCategory = activeCategory;

    document.querySelectorAll('.aside__item__sub-menu .category').forEach((item) => {
      item.classList.remove('active_sub');
    });
    if (subCategory !== '') {
      // Xử lý khi người dùng chọn subcategory
      setActiveSubCategory(activeSubCategory === subCategory ? null : subCategory);
      props.onCategoryClick(category, activeSubCategory === subCategory ? '' : subCategory);
    } else {
      // Xử lý khi người dùng chỉ chọn category
      setActiveCategory(prevActiveCategory === category ? null : category);
      props.onCategoryClick(prevActiveCategory === category ? null : category, ''); // Truyền chuỗi rỗng cho subcategory
    }
  };

  return (
    <div className="product__menu menu__category">
      <ul className="aside__list body-large">
        <li className="aside__item title_aside_item">
          <span className="item__title">
            <IoMenuSharp className="icon-menu" />
            Danh mục sản phẩm
          </span>
        </li>
        <li className="aside__item js-item">
          <div className="aside__item__line"></div>
          <span
            className={`aside__header ${activeCategory === 'Trang_suc' ? 'active' : ''}`}
            onClick={() => handleClick('Trang_suc')}
          >
            Trang sức
          </span>
          <ul className={`aside__item__sub-menu ${activeCategory === 'Trang_suc' ? 'active' : ''}`}>
            <li
              className={`category ${activeSubCategory === 'Vong_co' ? 'active_sub' : ''}`}
              onClick={() => handleClick('Trang_suc', 'Vong_co')}
            >
              <span>Vòng cổ</span>
            </li>
            <li
              className={`category ${activeSubCategory === 'Vong_tay' ? 'active_sub' : ''}`}
              onClick={() => handleClick('Trang_suc', 'Vong_tay')}
            >
              <span>Vòng tay</span>
            </li>
            <li
              className={`category ${activeSubCategory === 'Hoa_tai' ? 'active_sub' : ''}`}
              onClick={() => handleClick('Trang_suc', 'Hoa_tai')}
            >
              <span>Hoa tai</span>
            </li>
            <li
              className={`category ${activeSubCategory === 'Nhan' ? 'active_sub' : ''}`}
              onClick={() => handleClick('Trang_suc', 'Nhan')}
            >
              <span>Nhẫn</span>
            </li>
          </ul>
        </li>
        <li className="aside__item js-item">
          <span
            className={`aside__header ${activeCategory === 'Tranh' ? 'active' : ''}`}
            onClick={() => handleClick('Tranh')}
          >
            Tranh
          </span>
        </li>
        <li className="aside__item js-item">
          <span
            className={`aside__header ${activeCategory === 'Do_go' ? 'active' : ''}`}
            onClick={() => handleClick('Do_go')}
          >
            Đồ gỗ
          </span>
        </li>
        <li className="aside__item js-item">
          <span
            className={`aside__header ${activeCategory === 'Khac' ? 'active' : ''}`}
            onClick={() => handleClick('Khac')}
          >
            Khác
          </span>
          <ul className={`aside__item__sub-menu ${activeCategory === 'Khac' ? 'active' : ''}`}>
            <li
              className={`category ${activeSubCategory === 'Thiep' ? 'active_sub' : ''}`}
              onClick={() => handleClick('Khac', 'Thiep')}
            >
              <span>Thiệp</span>
            </li>
            <li
              className={`category ${activeSubCategory === 'Op_lung' ? 'active_sub' : ''}`}
              onClick={() => handleClick('Khac', 'Op_lung')}
            >
              <span>Ốp lưng</span>
            </li>
            <li
              className={`category ${activeSubCategory === 'Mat_kinh' ? 'active_sub' : ''}`}
              onClick={() => handleClick('Khac', 'Mat_kinh')}
            >
              <span>Mắt kính</span>
            </li>
            <li
              className={`category ${activeSubCategory === 'Day_deo' ? 'active_sub' : ''}`}
              onClick={() => handleClick('Khac', 'Day_deo')}
            >
              <span>Dây đeo</span>
            </li>
            <li
              className={`category ${activeSubCategory === 'Mu_non' ? 'active_sub' : ''}`}
              onClick={() => handleClick('Khac', 'Mu_non')}
            >
              <span>Mũ nón</span>
            </li>
            <li
              className={`category ${activeSubCategory === 'Khau_trang' ? 'active_sub' : ''}`}
              onClick={() => handleClick('Khac', 'Khau_trang')}
            >
              <span>Khẩu trang</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default ProductMenu;
