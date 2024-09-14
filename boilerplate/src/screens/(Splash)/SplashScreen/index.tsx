import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CompositeSplashScreenProps } from '../../../navigation/type';

type SplashScreenPropsType = CompositeSplashScreenProps<'SplashStack','Splash'>

const SplashScreen: React.FC<SplashScreenPropsType> = ({navigation}) => {
    useEffect(() => {
        // Hide the splash screen after 2 seconds
        setTimeout(() => {
            navigation.navigate('SplashStack' , {screen : 'Splash'});
        }, 2000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to My App</Text>
        </View>
    );
};

//define all screen styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default SplashScreen;
