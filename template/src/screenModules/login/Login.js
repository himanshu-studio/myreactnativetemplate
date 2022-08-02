import React, {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import WrappedComponent from '../../components/WrapperComponent';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../constants/Constants';
import {Texts} from '../../constants/Strings';
import SGHeader from '../../components/SGHeader';
const Login = () => {
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    navigation.navigate(ScreenNames.RegisterScreen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <SGHeader title={Texts.login} showBack={false} />
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <TouchableOpacity onPress={onPress}>
          <Text>Go to Register</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WrappedComponent(Login);
