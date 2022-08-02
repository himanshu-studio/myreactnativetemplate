/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:52:45
 * @modify date 2020-05-06 09:52:45
 * @desc [Custom button component]
 */

import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Colors, Fonts} from '../../constants/Constants';

export default class SGButton extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    image: PropTypes.number,
    customStyle: PropTypes.object,
  };

  static defaultProps = {
    customStyle: undefined,
    image: undefined,
  };

  render() {
    return (
      <TouchableOpacity
        style={[styles.button, this.props.customStyle]}
        onPress={this.buttonPressed.bind(this)}>
        <Text style={[styles.buttonText, this.props.customTextStyle]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }

  buttonPressed() {
    this.props.onPress();
  }
}

const styles = StyleSheet.create({
  button: {
    height: '25@ms',
    backgroundColor: Colors.glButtonOrange,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: '9@ms',
    fontFamily: Fonts.muliBold,
    textAlign: 'center',
  },
});
