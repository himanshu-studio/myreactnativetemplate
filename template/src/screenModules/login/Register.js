/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:52:09
 * @modify date 2022-11-25 11:01:49
 * @desc [Registration screen]
 */
/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */

import React, {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import SGHeader from '../../components/SGHeader';
import WrappedComponent from '../../components/WrapperComponent';
import {saveRegisterScreenData} from '../../redux/user/Action';
import {ScreenNames} from '../../constants/Constants';
import {Texts} from '../../constants/Strings';

const Register = props => {
  const dispatch = useDispatch();
  const moveToNextScreen = useCallback(() => {
    //Using dummy data to save
    const registerData = {
      firstName: 'First',
      lastName: 'Last',
      mobileNo: '9998887771'
    }
    dispatch(saveRegisterScreenData(registerData))
    props.navigation.navigate(ScreenNames.Screen3);
  }, []);
  return (
    <>
      <SGHeader title={Texts.register} />
      <View style={styles.container}>
        <Text>Register screen</Text>
        <TouchableOpacity
          onPress={moveToNextScreen}>
          <Text>Move to Next</Text>
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
