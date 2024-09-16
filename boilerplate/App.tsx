/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation/RootStack';
import { StatusBar } from 'react-native';


const App: React.FC = () => {

  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor={'transparent'}/>
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
