import { NavigationContainer, NavigatorScreenParams, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React, { useContext, useRef } from 'react';
import SplashStack, { SplashStackParamList } from '../SplashStack';
import OnboardingScreen from '../../screens/OnBoarding';
import AuthStack, { AuthStackParamList } from '../AuthStack';
import AppStack, { AppStackParamList } from '../AppStack';
import { ThemeContext } from '../../theme/ThemeProvider';
import themes from '../../theme/theme';

//RootStacks object define all the stacks name inside RootS stack
export const RootStacks = {
    SPLASH : 'SplashStack' as const, // as const make this as a unique key pair which make it non changeable
    WELCOME : 'Welcome' as const,
    AUTH : 'Auth' as const,
    APP : 'App' as const,
};

// define the stack navigator screen params (undefine for no params to be passed)
export type RootStackParamList = {
    [RootStacks.SPLASH] : NavigatorScreenParams<SplashStackParamList>, //this pass the navigation stack types for splash stack
    [RootStacks.WELCOME] : undefined, //udefine represents this is not sub stack but screen which does not have params
    [RootStacks.AUTH] : NavigatorScreenParams<AuthStackParamList>, //this pass the navigation stack types for Auth Stack
    [RootStacks.APP] : NavigatorScreenParams<AppStackParamList> | undefined, //this pass the navigation stack types for App Stack
  };

  const Stack = createStackNavigator<RootStackParamList>();

  //screenOptions define all the options for screen in SplashStack
const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

  const Navigation : React.FC = ()=>{
    const { theme } = useContext(ThemeContext);
    const currentTheme = theme === 'dark' ? themes.dark : themes.light;
    const navigationRef = useNavigationContainerRef();
    const routeNameRef = useRef<any>();

    const trackScreenView = async (currentScreen : string | undefined) => {
      console.log("this is currentView --- ", currentScreen)
    }

    return (
      //@ts-expect-error
      <NavigationContainer theme={currentTheme} ref={navigationRef}  onReady={() => {
        routeNameRef.current = navigationRef?.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef?.getCurrentRoute()?.name;
        // dispatch.general.setCurrentScreen(currentRouteName);
        console.log("previous route name: " + previousRouteName)
        console.log("current route name: " + currentRouteName)
        if (previousRouteName !== currentRouteName) {
          // Save the current route name for later comparison
          routeNameRef.current = currentRouteName;

          // Replace the line below to add the tracker from a mobile analytics SDK
          await trackScreenView(currentRouteName);
        }
      }} >
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name={RootStacks.SPLASH} component={SplashStack} />
          <Stack.Screen name={RootStacks.WELCOME} component={OnboardingScreen} />
          <Stack.Screen name={RootStacks.AUTH} component={AuthStack} />
          <Stack.Screen name={RootStacks.APP} component={AppStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  export default Navigation;
