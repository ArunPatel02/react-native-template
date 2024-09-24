import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import SplashScreen from '../../screens/SplashScreen';

//SplashScreens object define all the screens name inside splash stack
export const SplashScreens = {
  SPLASH: 'Splash' as const, // as const make this as a unique key pair which make it non changeable
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
        {/* as React.CoponentType define screen type with empty props if you want to pass the props you can define inide the empty object {} */}
      <Stack.Screen name={SplashScreens.SPLASH} component={SplashScreen as React.ComponentType<{}>} />
    </Stack.Navigator>
  );
};

export default SplashStack;
