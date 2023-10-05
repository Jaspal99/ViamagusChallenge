import React from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './Style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
export default function Button(props) {
  return (
    <Pressable
      onPress={() => props.onPress()}
      disabled={props.isDisabled}
      style={[
        style.button,
        props.isDisabled && style.disabled,
        props.title == 'Under' ? style.underColor : style.overColor,
      ]}>
      <FontAwesomeIcon
        color="white"
        size={15}
        icon={props.title == 'Under' ? faArrowDown : faArrowUp}
      />
      <Text style={style.title}>{props.title}</Text>
    </Pressable>
  );
}
Button.default = {
  isDisabled: false,
  onPress: {},
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};
