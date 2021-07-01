import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/scss/index.scss';

const mock = {
  category: `Смартфоны`,
  items: [
    {
      name: `Apple iPhone 11 64 Gb (Gold)`,
      price: {
        new: 49999,
        old: 60999
      },
      characteristics: {
        bonuses: `ББ + 2000 бонусов`,
        specialOffer: `Рассрочка`,
        availability: `В наличии`,
        basic: {
          operationSystem: `iOS 13`,
          color: `золотой`,
          yearOfIssue: 2019
        },
        cpu: {
          manufacturer: `Apple`,
          type: `A13 Bionic`
        },
        screen: {
          diagonal: 5.8,
          type: `Super Retina XDR`,
          resolution: `2436×1125 точек`
        },
        camera: {
          majorQuantity: 3,
          majorResolutions: `12 МПикс, 12 МПикс, 12 МПикс`,
          majorFunctions: `Режим «Портрет», портретное освещение, оптическая стабилизация, вспышка True Tone, Focus Pixels`,
          frontIsThere: `есть`,
          frontResolutions: `12 Мпикс`,
          flash: `есть, светодиодная`
        },
        memory: {
          builtIn: `64 Гб`
        },
        powerSupply: {
          connectorType: `Lightning`,
          fastCharging: `есть`,
          wirelessCharging: `есть`
        },
        connection: {
          lightning8PinConnector: `есть`,
          headphoneJack: `Lightning`
        }
      },
      img: `./img/apple-iphone-11-64-gb-gold.png`
    },
    {
      name: `Xiaomi Redmi Note 8 Pro (blue)`,
      price: {
        new: 16700,
        old: 19999
      },
      characteristics: {
        bonuses: `ББ + 1000 бонусов`,
        specialOffer: `Скидка 50% на наушники `,
        availability: `От 3 до 5 дней`,
        basic: {
          operationSystem: `iOS 13`,
          color: `черный`,
          yearOfIssue: 2019
        },
        cpu: {
          manufacturer: `Apple`,
          type: `A13 Bionic`
        },
        screen: {
          diagonal: 5.8,
          type: `Super Retina XDR`,
          resolution: `2436×1125 точек`
        },
        camera: {
          majorQuantity: 3,
          majorResolutions: `12 МПикс, 12 МПикс, 12 МПикс`,
          majorFunctions: `Режим «Портрет», портретное освещение, оптическая стабилизация, вспышка True Tone, Focus Pixels`,
          frontIsThere: `есть`,
          frontResolutions: `12 Мпикс`,
          flash: `есть, светодиодная`
        },
        memory: {
          builtIn: `64 Гб`
        },
        powerSupply: {
          connectorType: `Lightning`,
          fastCharging: `есть`,
          wirelessCharging: `есть`
        },
        connection: {
          lightning8PinConnector: `есть`,
          headphoneJack: `Lightning`
        }
      },
      img: `./img/Xiaomi-Redmi-Note-8-Pro-(blue).png`
    }
  ]
};

ReactDOM.render(
    <React.StrictMode>
      <App data={mock}/>
    </React.StrictMode>,
    document.getElementById(`root`)
);
