import {TextInput, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.View`
  border-bottom: ${StyleSheet.hairlineWidth} solid rgba(0, 0, 0, 0.1);
`;

const CommentInput = ({onSubmit, placeholder}) => {
  const [text, setText] = useState('');

  const handleChangeText = newText => {
    setText(newText);
  };

  const handleSubmitEditing = () => {
    if (!text) return;
    onSubmit(text);
    setText('');
  };

  return null;
};

CommentInput.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

CommentInput.defaultProps = {
  placeholder: '',
};

export default CommentInput;
