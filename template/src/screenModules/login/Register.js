/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:52:09
 * @modify date 2022-07-22 14:19:37
 * @desc [Registration screen]
 */
/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SGHeader from '../../components/SGHeader';
import WrappedComponent from '../../components/WrapperComponent';
import {ScreenNames} from '../../constants/Constants';
import {Texts} from '../../constants/Strings';

const Register = props => {
  return (
    <>
      <SGHeader title={Texts.register} />
      <View style={styles.container}>
        <Text>Register screen</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(ScreenNames.LoginScreen);
          }}>
          <Text>Goto Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WrappedComponent(Register);
