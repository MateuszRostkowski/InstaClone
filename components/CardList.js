import React from 'react';
import Card from './Card';

const data = [
  {
    id: 0,
    author: 'Bob Ross',
  },
  {
    id: 1,
    author: 'Chuck Norris',
  },
];

const CardList = () => {
  return (
    <Card
      fullname={'First Last'}
      linkText={'Comments'}
      onPressLinkText={() => {
        console.log('Pressed link!');
      }}
      image={{uri: 'https://unsplash.it/600/600'}}
    />
  );
};

export default CardList;
