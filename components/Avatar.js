import React from 'react';
import {ColorPropType, Text, View} from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AvatarContainer = styled.View`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
  background-color: ${props => props.backgroundColor};
  justify-content: center;
  align-items: center;
`;

const InitialsText = styled.Text`
  color: white;
`;

const Avatar = ({size, backgroundColor, initials}) => {
  return (
    <AvatarContainer size={size} backgroundColor={backgroundColor}>
      <InitialsText>{initials}</InitialsText>
    </AvatarContainer>
  );
};

Avatar.PropTypes = {
  initials: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  backgroundColor: ColorPropType.isRequired,
};

export default Avatar;
