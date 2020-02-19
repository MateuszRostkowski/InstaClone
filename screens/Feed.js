import {
  ActivityIndicator,
  Text,
  ViewPropTypes,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';
import {fetchImages} from '../utils/api';
import CardList from '../components/CardList';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const newItems = await fetchImages();
        setLoading(false);
        setItems(newItems);
      } catch (e) {
        setLoading(false);
        setError(e);
      }
    }

    fetchMyAPI();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  console.log(items);
  return (
    <SafeAreaView>
      <CardList data={items} />
    </SafeAreaView>
  );
};

Feed.PropTypes = {
  style: ViewPropTypes.style,
};

Feed.defaultProps = {
  style: null,
};

export default Feed;
