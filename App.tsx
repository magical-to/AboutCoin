import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './Store';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
}

export default App;
