/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:52:09
 * @modify date 2022-11-25 11:03:35
 * @desc [Registration screen]
 */
/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */

import React, { useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import SGHeader from '../../components/SGHeader';
import WrappedComponent from '../../components/WrapperComponent';
import {ScreenNames} from '../../constants/Constants';
import {Texts} from '../../constants/Strings';

const Register = props => {
  const {registerData, screen3Data} = useSelector((state) => state.userReducer); 
  useEffect(() => {
    if(registerData && screen3Data) {
      console.log('registerData', registerData);
      console.log('screen3Data', screen3Data);
    }
  }, [registerData, screen3Data])
  return (
    <>
      <SGHeader title={Texts.register} />
      <View style={styles.container}>
        <Text>Data shown below from previous screens</Text>
        <Text>{JSON.stringify(registerData)}</Text>
        <Text>{JSON.stringify(screen3Data)}</Text>
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