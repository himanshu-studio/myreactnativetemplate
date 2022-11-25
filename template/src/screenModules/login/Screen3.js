/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-05-06 09:52:09
 * @modify date 2022-11-25 11:02:14
 * @desc [Registration screen]
 */
/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */

import React, {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SGHeader from '../../components/SGHeader';
import {useDispatch} from 'react-redux';
import WrappedComponent from '../../components/WrapperComponent';
import {saveScreen3Data} from '../../redux/user/Action';
import {ScreenNames} from '../../constants/Constants';
import {Texts} from '../../constants/Strings';

const Screen3 = props => {
  const dispatch = useDispatch();
  const moveToNextScreen = useCallback(() => {
    //Using dummy data to save
    const screen3Data = {
      key1: 10,
      key2: 20,
      key3: {
        key4: 'abc'
      }
    }
    dispatch(saveScreen3Data(screen3Data))
    props.navigation.navigate(ScreenNames.FinalScreen);
  }, []);
  return (
    <>
      <SGHeader title={Texts.register} />
      <View style={styles.container}>
        <Text>Screen 3</Text>
        <TouchableOpacity
          onPress={moveToNextScreen}>
          <Text>Go to FinalScreen</Text>
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

export default WrappedComponent(Screen3);
