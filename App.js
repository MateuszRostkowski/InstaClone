import React from 'react';
import styled from 'styled-components';

import CardList from './components/CardList';

const Container = styled.SafeAreaView``;

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

const App = () => {
  return (
    <Container>
      <CardList data={data} />
    </Container>
  );
};

export default App;
