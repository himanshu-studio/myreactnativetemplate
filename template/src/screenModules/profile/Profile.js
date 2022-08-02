/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-04-16 13:15:54
 * @modify date 2020-04-16 13:15:54
 * @desc [Just a placeholder for possible user profile screen]
 */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WrappedComponent from '../../components/WrapperComponent';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WrappedComponent(Profile);
