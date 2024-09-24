import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {  ThemeContext, useTheme } from '../../../theme/ThemeProvider';
import { CompositeBottomTabNavigationScreenProps } from '../../../navigation/type';
import { FlashList } from '@shopify/flash-list';
import { MotiView } from 'moti'
import { Skeleton } from 'moti/skeleton'

const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />


// Define the props for the HomeScreen component that is import from navigation/types.ts
interface HomeScreenProps extends CompositeBottomTabNavigationScreenProps<'Home'> { }

const data = [
    { id: '1', title: 'Splash Screen', description: 'Welcome to our app! This screen introduces you to the features and benefits of using our application, setting the stage for your journey.' },
    { id: '2', title: 'Authentication', description: 'Secure your account by logging in or signing up. This screen allows you to access your personalized experience and manage your settings.' },
    { id: '3', title: 'Verification', description: 'Verify your identity through email or SMS to ensure the security of your account and protect your personal information.' },
    { id: '4', title: 'Onboarding', description: 'Get started with a guided tour of the app, highlighting key features and functionalities to help you navigate seamlessly.' },
    { id: '5', title: 'App Screen', description: 'Explore the main features of the app, including settings, notifications, and support options, all designed to enhance your user experience.' },
    { id: '6', title: 'Settings', description: 'Customize your app experience by adjusting settings such as theme, notifications, and account preferences.' },
    { id: '7', title: 'Profile Management', description: 'Manage your profile information, including updating your profile picture, changing your password, and deleting your account.' },
    { id: '8', title: 'About Us', description: 'Learn more about our team, mission, and the values that drive our application development.' },
    { id: '9', title: 'Feedback', description: 'Share your thoughts and suggestions to help us improve the app and provide a better user experience.' },
];

interface RenderItemProps {
    title: string;
    description: string;
}

const RenderItem: React.FC<RenderItemProps> = ({ title, description }) => {
    const Theme = useTheme()
    const {theme} = useContext(ThemeContext)
    const styles = StyleSheet.create({
        container: {
            padding: 15,
            marginHorizontal : 10,
            marginVertical: 10,
            borderRadius: 8,
            backgroundColor: Theme.colors.background,
            shadowColor: Theme.colors.text,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        title: {
            fontSize: Theme.fontSize.m,
            fontWeight: Theme.fonts.bold,
            color: Theme.colors.text,
        },
        description: {
            fontSize: Theme.fontSize.s,
            color: Theme.colors.text,
        },
    });
    const [loading, setloading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setloading(false)
      }, 2000);
    }, [])
    

    return (
        <View style={styles.container}>
             <Skeleton colorMode={theme} show={loading} height={30} radius={0} >
                <Text style={styles.title}>{loading?'':title}</Text>
             </Skeleton>
             {loading && <Spacer />}
             <Skeleton colorMode={theme} show={loading} height={40} radius={0} >
            <Text style={styles.description}>{loading?'':description}</Text>
            </Skeleton>
        </View>
    );
};


const HomeScreen: React.FC<HomeScreenProps> = ({ }) => {
    const Theme = useTheme()
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            // padding: 10,
            backgroundColor: Theme.colors.background
        },
        text: {
            fontSize: Theme.fontSize.s,
            color: Theme.colors.text
        },
    });

    return (
        <View style={[styles.container]}>
           <FlashList data={data} estimatedItemSize={100} renderItem={({item})=><RenderItem title={item.title}  description={item.description}/>} refreshing={false} onRefresh={()=>console.log('refresh')} />
        </View>
    );
};

export default HomeScreen;
