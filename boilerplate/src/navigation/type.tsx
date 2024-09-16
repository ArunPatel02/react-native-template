import { StackScreenProps } from '@react-navigation/stack';
import { CompositeScreenProps, } from '@react-navigation/native';
import { SplashStackParamList } from './SplashStack';
import { RootStackParamList } from './RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackPropsType <T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList , T>

export type SplashScreenProps<T extends keyof SplashStackParamList> = StackScreenProps<SplashStackParamList , T>
export type CompositeSplashScreenProps < T extends keyof SplashStackParamList> = CompositeScreenProps<RootStackPropsType<'SplashStack'>, SplashScreenProps<T>>