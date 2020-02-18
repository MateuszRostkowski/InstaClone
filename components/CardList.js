import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import {getImageFromId} from '../utils/api';
import Card from './Card';

const keyExtractor = ({id}) => id.toString();

const CardList = ({data}) => {
  const renderItem = ({item: {id, author}}) => (
    <Card
      fullname={author}
      image={{
        uri: getImageFromId(id),
      }}
    />
  );
  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
};

CardList.PropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CardList;
