import React from 'react';
import {Image, View} from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AuthorRow from './AuthorRow';

const Container = styled.View`
  width: 420px;
  height: 420px;
`;
const Picture = styled.Image`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  /* flex:1; */
`;

const Indicator = styled.ActivityIndicator`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Card = ({fullname, linkText, onPressLinkText, image}) => {
  return (
    <View>
      <AuthorRow
        fullname={fullname}
        linkText={linkText}
        onPressLinkText={onPressLinkText}
      />
      <Container>
        <Indicator size={'large'} color="red" />
        <Picture source={image} />
      </Container>
    </View>
  );
};

Card.propTypes = {
  fullname: PropTypes.string.isRequired,
  image: Image.propTypes.source.isRequired,
  linkText: PropTypes.string,
  onPressLinkText: PropTypes.func,
};

Card.defaultProps = {
  linkText: '',
  onPressLinkText: () => {},
};

export default Card;
