import { StackScreenProps } from '@react-navigation/stack';
import { CompositeScreenProps, } from '@react-navigation/native';
import { SplashStackParamList } from './SplashStack';
import { RootStackParamList } from './RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from './AuthStack';
import { AppStackParamList } from './AppStack';
import { BottomTabNavigationParamList } from './AppStack/BottomTabNavigation';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

//type all the navigation type in this file
//make all types generic
//define the rootstack navigation type used in screens
export type RootStackPropsType<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>

//for nested navigation we have o compine types with CompositeScreenProps to use in screens
export type SplashScreenProps<T extends keyof SplashStackParamList> = StackScreenProps<SplashStackParamList, T>
export type CompositeSplashScreenProps<T extends keyof SplashStackParamList> = CompositeScreenProps<RootStackPropsType<'SplashStack'>, SplashScreenProps<T>>

export type AuthScreenProps<T extends keyof AuthStackParamList> = StackScreenProps<AuthStackParamList, T>
export type CompositeAuthScreenProps<T extends keyof AuthStackParamList> = CompositeScreenProps<RootStackPropsType<'Auth'>, AuthScreenProps<T>>

export type AppScreenProps<T extends keyof AppStackParamList> = StackScreenProps<AppStackParamList, T>
export type CompositeAppScreenProps<T extends keyof AppStackParamList> = CompositeScreenProps<RootStackPropsType<'Auth'>, AppScreenProps<T>>

export type BottomTabNavigationScreenProps<T extends keyof BottomTabNavigationParamList> = BottomTabScreenProps<BottomTabNavigationParamList, T>

export type CompositeBottomTabNavigationScreenProps<T extends keyof BottomTabNavigationParamList> = CompositeScreenProps<RootStackPropsType<'App'>, CompositeScreenProps<AppScreenProps<'Bottom_Tab'>, BottomTabNavigationScreenProps<T>>>
