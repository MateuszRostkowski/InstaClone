import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Avatar from './Avatar';
import getAvatarColor from '../utils/getAvatarColor';
import getInitials from '../utils/getInitials';

const Container = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

const AuthorName = styled.Text`
  flex: 1;
  margin: 0 6px;
`;

const AuthorRow = ({fullName, linkText, onPressLinkText}) => {
  return (
    <Container>
      <Avatar
        initials={getInitials(fullName)}
        backgroundColor={getAvatarColor(fullName)}
        size={35}
      />
      <AuthorName numberOfLines={1}>{fullName}</AuthorName>
      {!!linkText && (
        <TouchableOpacity onPress={onPressLinkText}>
          <Text>{linkText}</Text>
        </TouchableOpacity>
      )}
    </Container>
  );
};

AuthorRow.PropTypes = {
  fullName: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func.isRequired,
};

export default AuthorRow;
