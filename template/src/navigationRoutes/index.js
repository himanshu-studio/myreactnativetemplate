/**
 * @author Himanshu Yadav
 * @email himanshu.yadav@studiographene.com
 * @create date 2022-06-23 18:50:49
 * @modify date 2022-11-25 10:53:10
 * @desc Main file which contains navigators(Stack and Bottom Tabs) created using react-navigation v6.
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ScreenNames} from '../constants/Constants';
import {
  stackScreenOptions,
  tabScreenOptions,
  drawerScreenOptions,
} from './NavigationUtil';

//Screen Imports
import Discovery from '../screenModules/discovery/Discovery';
import Profile from '../screenModules/profile/Profile';
import LoginScreen from '../screenModules/login/Login';
import RegisterScreen from '../screenModules/login/Register';
import Screen3 from '../screenModules/login/Screen3';
import FinalScreen from '../screenModules/login/FinalScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name={ScreenNames.Discovery} component={Discovery} />
      <Tab.Screen name={ScreenNames.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name={ScreenNames.LoginScreen} component={LoginScreen} />
      <Stack.Screen
        name={ScreenNames.RegisterScreen}
        component={RegisterScreen}
      />
      <Stack.Screen
        name={ScreenNames.Screen3}
        component={Screen3}
      />
      <Stack.Screen
        name={ScreenNames.FinalScreen}
        component={FinalScreen}
      />
    </Stack.Navigator>
  );
};

const MainDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={drawerScreenOptions}>
      <Drawer.Screen name={ScreenNames.MyStack} component={MainStack} />
      <Drawer.Screen name={ScreenNames.MyTabs} component={MainTab} />
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainDrawer />
    </NavigationContainer>
  );
};

export default AppNavigator;
