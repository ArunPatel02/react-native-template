import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SplashStack, { SplashStackParamList } from '../SplashStack';

//RootStacks object define all the stacks name inside RootS stack
export const RootStacks = {
    SPLASH : 'SplashStack' as const,
    APP : 'App' as const,
};

export type RootStackParamList = {
    [RootStacks.SPLASH] : NavigatorScreenParams<SplashStackParamList>,
    [RootStacks.APP] : NavigatorScreenParams<SplashStackParamList>,
  };

  const Stack = createStackNavigator<RootStackParamList>();

  const Navigation : React.FC = ()=>{
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={RootStacks.SPLASH} component={SplashStack} options={{ headerShown: false }} />
          <Stack.Screen name={RootStacks.APP} component={SplashStack} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  export default Navigation;
