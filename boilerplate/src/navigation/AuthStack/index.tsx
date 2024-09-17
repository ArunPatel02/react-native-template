import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import SignInScreen from '../../screens/Auth/SignIn';
import Verification from '../../screens/Auth/verification';

//AuthScreens object define all the screens name inside Auth stack
export const AuthScreens = {
  SIGNIN: 'Signin' as const, // as const make this as a unique key pair which make it non changeable
  VERIFICATION: 'Verification' as const,
};

//AuthStackParamList define the stack navigator screen params (undefine for no params to be passed)
export type AuthStackParamList = {
  [AuthScreens.SIGNIN]: undefined;
  [AuthScreens.VERIFICATION]: undefined;
};

//Stack define the stack for stack navigation
const Stack = createStackNavigator<AuthStackParamList>();

//screenOptions define all the options for screen in AuthStack
const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={AuthScreens.SIGNIN}
      screenOptions={screenOptions}>
        {/* as React.CoponentType define screen type with empty props if you want to pass the props you can define inide the empty object {} */}
      <Stack.Screen name={AuthScreens.SIGNIN} component={SignInScreen as React.ComponentType<{}>} />
      <Stack.Screen name={AuthScreens.VERIFICATION} component={Verification as React.ComponentType<{}>} />
    </Stack.Navigator>
  );
};

export default AuthStack;
