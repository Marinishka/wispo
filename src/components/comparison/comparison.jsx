import React from 'react';
import ProductHeader from '../product-header/product-header';
import CharacteristicsTable from '../characteristics-table/characteristics-table';
import PropTypes from 'prop-types';
import Prompt from '../prompt/prompt';

const Comparison = ({data}) => {
  const {category, items} = data;

  const getProductHeaders = (products, categoryItem) => {
    return products.map((product) => <ProductHeader key={product.name} item={product} categoryItem={categoryItem}/>);
  };

  return <div className="comparison">
    <div className="comparison__container">
      <div className="comparison__header">
        <div className="comparison__filter">
          <div>
            <div className="comparison__title">Для категорий</div>
            <Prompt plainText={`Подсказка`}/>
          </div>
          <select className="comparison__select">
            <option>{category}</option>
          </select>
          <div className="comparison__btns">
            <button className="comparison__btn comparison__btn--checked" data-filter-show="all-characteristics" aria-label="Показать все характеристики">Все характеристики</button>
            <button className="comparison__btn" data-filter-show="differences" aria-label="Показать только отличающиеся характеристики">Показать только различия</button>
          </div>
        </div>
        <div className="comparison__products-headers">
          {getProductHeaders(items, category)}
        </div>
      </div>
      <CharacteristicsTable data={items}/>
    </div>
  </div>;
};

Comparison.propTypes = {
  data: PropTypes.object
};

export default Comparison;
