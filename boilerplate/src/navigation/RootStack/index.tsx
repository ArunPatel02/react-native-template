import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import SplashStack, { SplashStackParamList } from '../SplashStack';
import OnboardingScreen from '../../screens/OnBoarding';
import SignInScreen from '../../screens/Auth/SignIn';

//RootStacks object define all the stacks name inside RootS stack
export const RootStacks = {
    SPLASH : 'SplashStack' as const,
    WELCOME : 'Welcome' as const,
    AUTH : 'Auth' as const,
    APP : 'App' as const,
};

export type RootStackParamList = {
    [RootStacks.SPLASH] : NavigatorScreenParams<SplashStackParamList>,
    [RootStacks.WELCOME] : undefined,
    [RootStacks.AUTH] : undefined,
    [RootStacks.APP] : NavigatorScreenParams<SplashStackParamList>,
  };

  const Stack = createStackNavigator<RootStackParamList>();

  //screenOptions define all the options for screen in SplashStack
const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

  const Navigation : React.FC = ()=>{
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name={RootStacks.SPLASH} component={SplashStack} />
          <Stack.Screen name={RootStacks.WELCOME} component={OnboardingScreen} />
          <Stack.Screen name={RootStacks.AUTH} component={SignInScreen} />
          <Stack.Screen name={RootStacks.APP} component={SplashStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  export default Navigation;
