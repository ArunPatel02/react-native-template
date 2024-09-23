import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';
import SettingsScreen from '../../../screens/App/Setting';
import HomeScreen from '../../../screens/App/Home';

  const Home = ()=>{
    return (<Text>Home Page</Text>)
  }

  //BottomTabNavigationScreens object define all the screens name inside App stack
  export const BottomTabNavigationScreens = {
    HOME: 'Home' as const, // as const make this as a unique key pair which make it non changeable
    SETTING: 'Setting' as const,
    PROFILE: 'Profile' as const,
  };

  //BottomTabNavigationParamList define the stack navigator screen params (undefine for no params to be passed)
  export type BottomTabNavigationParamList = {
    [BottomTabNavigationScreens.HOME]: undefined;
    [BottomTabNavigationScreens.SETTING]: undefined;
    [BottomTabNavigationScreens.PROFILE]: undefined;
  };

  //Tab define the Tab for Bottom Tab navigation
  const Tab = createBottomTabNavigator();

  const BottomTabNavigation: React.FC = () => {
    return (
      <Tab.Navigator
        initialRouteName={BottomTabNavigationScreens.HOME}>
          {/* as React.CoponentType define screen type with empty props if you want to pass the props you can define inide the empty object {} */}
        <Tab.Screen name={BottomTabNavigationScreens.HOME} component={HomeScreen as React.ComponentType<{}>} />
        <Tab.Screen name={BottomTabNavigationScreens.SETTING} component={SettingsScreen as React.ComponentType<{}>} />
        <Tab.Screen name={BottomTabNavigationScreens.PROFILE} component={Home as React.ComponentType<{}>} />
        {/* <Stack.Screen name={BottomTabNavigationScreens.Verification} component={Verification as React.ComponentType<{}>} /> */}
      </Tab.Navigator>
    );
  };

  export default BottomTabNavigation;
