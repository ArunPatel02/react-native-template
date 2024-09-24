import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import { NavigatorScreenParams } from '@react-navigation/native';
import BottomTabNavigation, { BottomTabNavigationParamList } from './BottomTabNavigation';

//AppScreens object define all the screens name inside App stack
export const AppScreens = {
  BOTTOM_TAB: 'Bottom_Tab' as const, // as const make this as a unique key pair which make it non changeable
};

//AppStackParamList define the stack navigator screen params (undefine for no params to be passed)
export type AppStackParamList = {
  [AppScreens.BOTTOM_TAB]: NavigatorScreenParams<BottomTabNavigationParamList>;
};

//Stack define the stack for stack navigation
const Stack = createStackNavigator<AppStackParamList>();

//screenOptions define all the options for screen in AppStack
const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const AppStack: React.FC = () => {
  return ( 
    <Stack.Navigator
      initialRouteName={AppScreens.BOTTOM_TAB}
      screenOptions={screenOptions}>
        {/* as React.CoponentType define screen type with empty props if you want to pass the props you can define inide the empty object {} */}
      <Stack.Screen name={AppScreens.BOTTOM_TAB} component={BottomTabNavigation} />
    </Stack.Navigator>
  );
};

export default AppStack;
