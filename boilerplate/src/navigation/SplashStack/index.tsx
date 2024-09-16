import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import SplashScreen from '../../screens/SplashScreen';

//SplashScreens object define all the screens name inside splash stack
export const SplashScreens = {
  SPLASH: 'Splash' as const,
};

//SplashStackParamList define the stack navigator screen params (undefine for no params to be passed)
export type SplashStackParamList = {
  [SplashScreens.SPLASH]: undefined;
};

//Stack define the stack for stack navigation
const Stack = createStackNavigator<SplashStackParamList>();

//screenOptions define all the options for screen in SplashStack
const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const SplashStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={SplashScreens.SPLASH}
      screenOptions={screenOptions}>
      <Stack.Screen name={SplashScreens.SPLASH} component={SplashScreen as React.ComponentType<{}>} />
    </Stack.Navigator>
  );
};

export default SplashStack;
