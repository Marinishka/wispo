import React from 'react';
import CharacteristicRow from '../characteristic-row/characteristic-row';
import PropTypes from 'prop-types';

const getRows = (data) => {
  const characteristics = Array.from(getTitles(data));

  return characteristics.map((characteristic) => {
    const valueOfCharacteristics = data.map((el) => el.characteristics[characteristic]);
    return <CharacteristicRow key={`characteristic-${characteristic}`} data={valueOfCharacteristics} characteristic={characteristic}/>;
  });
};

const getTitles = (data) => {
  const titles = new Set();

  data.forEach((element) => {
    (Object.keys(element.characteristics)).forEach((el) => {
      titles.add(el);
    });
  });
  return titles;
};

const CharacteristicsTable = ({data}) => {

  return <section className="characteristics">
    {getRows(data)}
    <h2 className="characteristics__title-bottom">Смартфон Apple iPhone 11 64GB Black (MWLT2RU/A) и Смартфон Apple iPhone SE 2020 128GB Black (MXD02RU/A) - сравнение основных характеристик моделей</h2>
    <div className="characteristics__btns">
      <button className="characteristics__btn characteristics__btn--clear">Очистить список</button>
      <a className="characteristics__btn characteristics__btn--back" href="/">Назад к товарам</a>
    </div>
  </section>;
};

CharacteristicsTable.propTypes = {
  data: PropTypes.array
};

export default CharacteristicsTable;
