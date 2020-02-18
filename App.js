import React from 'react';
import styled from 'styled-components';

import CardList from './components/CardList';

const Container = styled.SafeAreaView``;

const App = () => {
  return (
    <Container>
      <CardList />
    </Container>
  );
};

export default App;
