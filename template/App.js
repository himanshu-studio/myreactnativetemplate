/**
 * Forms
 * App
 * @author-Himanshu Yadav
 * @modify date 2022-07-12 16:19:36
 */

import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import Store from './src/store';
import AppNavigator from './src/navigationRoutes';
import {PersistGate} from 'redux-persist/integration/react';
import RNAsyncStorageFlipper from 'rn-async-storage-flipper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {store, persistor} = Store();
const App = () => {
  useEffect(() => {
    //Enable async storage flipper plugin in dev mode
    if (__DEV__) {
      RNAsyncStorageFlipper(AsyncStorage);
    }
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
