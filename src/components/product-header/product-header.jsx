import React from 'react';
import PropTypes from 'prop-types';

const ProductHeader = ({item, categoryItem}) => {
  return <div className="product-header">
    <img className="product-header__img" width="120" height="147" src={item.img} alt=""></img>
    <div className="product-header__info">
      <p className="product-header__category">{categoryItem}</p>
      <a href="/" className="product-header__name">{item.name}</a>
      <div className="product-header__prices">
        <span className="product-header__price product-header__price--new">{(item.price.new.toString()).replace(/(\d)(?=(\d{3})+$)/g, `$1 `)} &#8381;</span>
        <span className="product-header__price product-header__price--old">{(item.price.old.toString()).replace(/(\d)(?=(\d{3})+$)/g, `$1 `)} &#8381;</span>
      </div>
      <div className="product-header__btns">
        <a className="product-header__in-basket" href="/">В корзину</a>
        <button className="product-header__buy">
          <svg className="product-header__icon" width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path d="M11.2649 14.9998L11.2304 14.9842L11.1942 14.9712C8.2333 13.9018 6.19037 12.7546 4.64779 11.1531C3.10639 9.55289 1.98639 7.41754 1.02328 4.23162L1.01425 4.20173C1.8485 2.92736 2.59587 2.30573 3.8829 1.53417C4.13903 1.38063 4.5281 1.41966 4.80159 1.71359C5.48977 2.45321 5.95024 3.01238 6.34318 3.59141C6.48289 3.79728 6.50052 4.11705 6.29122 4.42392L6.28052 4.43961L6.27042 4.4557L5.31751 5.97363L4.99912 6.48081L5.29591 7.00093C5.73775 7.77525 6.19986 8.48273 6.82544 9.12312C7.45658 9.76922 8.21955 10.3124 9.23321 10.8112L9.71994 11.0508L10.1861 10.7734L11.3455 10.0835L11.4414 10.0265L11.5224 9.94968C11.9282 9.56472 12.4896 9.59755 12.7663 9.86107C13.3721 10.438 13.8272 11.0277 14.1522 11.778C14.2048 11.8996 14.1938 12.01 14.1522 12.0887C13.5133 13.2981 12.7092 13.9096 11.3343 14.955L11.2788 14.9972C11.2785 14.9974 11.2758 14.9993 11.2704 14.9999C11.2673 15.0002 11.2655 14.9999 11.2649 14.9998ZM11.2649 14.9998L11.2655 15C11.2647 14.9997 11.2646 14.9997 11.2649 14.9998Z" stroke="black" strokeWidth="2"/>
          </svg>
        Купить в 1 клик</button>
      </div>
    </div>
    <button className="product-header__close" aria-label="Удалить продукт из сравнения">
      <svg width="16" height="16" viewBox="0 0 16 16">
        <rect width="16" height="16" rx="8" fill="black"/>
        <path d="M5 5L10.9997 10.9997M5.00032 11L11 5.00032" stroke="white" strokeWidth="2"/>
      </svg>
      <span className="visually-hidden">Удалить из сравнения</span>
    </button>
  </div>;
};

ProductHeader.propTypes = {
  item: PropTypes.object.isRequired,
  categoryItem: PropTypes.string.isRequired
};

export default ProductHeader;
