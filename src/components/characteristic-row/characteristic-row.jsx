import React from 'react';
import PropTypes from 'prop-types';
import {Characteristics} from '../../const';
import Prompt from '../prompt/prompt';

const getTitles = (data) => {
  const titles = new Set();

  data.forEach((element) => {
    (Object.keys(element)).forEach((el) => {
      titles.add(el);
    });
  });
  return titles;
};

const getValuesFromArray = (title, values) => {
  return values.map((value, index) => <div className="characteristics__cell" key={`${value}--${index}`}>
    <span className={`characteristics__value characteristics__value--${title}`}>{value}</span>
  </div>);
};

const getValuesFromObjects = (objects, characteristic) => {
  return objects.map((object, index) => <div className="characteristics__cell" key={`${characteristic}--${index}`}>
    <span className="characteristics__value">{object[characteristic]}</span>
  </div>);
};

const getSubcharacteristics = (title, dataWithObjects) => {
  const characteristicsTitles = Array.from(getTitles(dataWithObjects));
  return characteristicsTitles.map((characteristic, index) => <div className="characteristics__row characteristics__row--subcharacteristic" key={`${characteristic}--${index}`}>
    <div className="characteristics__title characteristics__title--subcharacteristic">
      {Characteristics[title][characteristic]}
      {Characteristics[title][characteristic] === Characteristics.connection.lightning8PinConnector ? <Prompt highlighter={`4500 мАч`} plainText={` - это примерно 30 часов активного использования устройства`}/> : ``}
    </div>
    {getValuesFromObjects(dataWithObjects, characteristic)}
  </div>);
};

const getProductCharacteristicValues = (title, values) => {
  let productCharacteristicValues = [];

  const dataWithObjects = values.filter((i) => i.constructor.name === `Object`);
  if (dataWithObjects.length > 0) {
    productCharacteristicValues = getSubcharacteristics(title, dataWithObjects);
  } else {
    productCharacteristicValues = getValuesFromArray(title, values);
  }
  return productCharacteristicValues;
};

const CharacteristicRow = ({data, characteristic}) => {
  return <div className={`characteristics__row characteristics__row--main characteristics__row--${characteristic}`}>
    <div className="characteristics__title characteristics__title--main">{Characteristics[characteristic].title}</div>
    {getProductCharacteristicValues(characteristic, data)}
  </div>;
};

CharacteristicRow.propTypes = {
  data: PropTypes.array,
  characteristic: PropTypes.string.isRequired
};

export default CharacteristicRow;
