import { StackScreenProps } from '@react-navigation/stack';
import { CompositeScreenProps, } from '@react-navigation/native';
import { SplashStackParamList } from './SplashStack';
import { RootStackParamList, RootStacks } from './RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type SplashScreenProps<T extends keyof SplashStackParamList> = CompositeScreenProps<StackScreenProps<RootStackParamList, 'Splash'> , StackScreenProps<SplashStackParamList , T>>

// export type RootStacksProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList , T>

// export type SplashScreenProps<T extends keyof SplashStackParamList> = CompositeScreenProps<RootStacksProps<RootStacks.SPLASH> , NativeStackScreenProps<SplashStackParamList , T>>