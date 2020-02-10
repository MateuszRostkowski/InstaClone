import React from 'react';
import styled from 'styled-components';

import AuthorRow from './components/AuthorRow';

const Container = styled.SafeAreaView``;

const App = () => {
  return (
    <Container>
      <AuthorRow
        fullName={'First Last'}
        linkText={'Comments'}
        onPressLinkText={() => {
          console.log('Pressed link!');
        }}
      />
    </Container>
  );
};

export default App;
