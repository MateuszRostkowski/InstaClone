import React from 'react';
import styled from 'styled-components';

import Card from './components/Card';

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

const Container = styled.SafeAreaView``;

const App = () => {
  return (
    <Container>
      {}
      <Card
        fullname={'First Last'}
        linkText={'Comments'}
        onPressLinkText={() => {
          console.log('Pressed link!');
        }}
        image={{uri: 'https://unsplash.it/600/600'}}
      />
    </Container>
  );
};

export default App;
