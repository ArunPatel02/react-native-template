import React from 'react';
import { View, StyleSheet } from 'react-native';
import GoogleLoginButton from '../../../components/molecules/GoogleLogin';
import FacebookSignIn from '../../../components/molecules/FacebookSignIn';

//social login component
const SocialLogin: React.FC = () => {
    return (
        <View style={styles.container}>
            <GoogleLoginButton />
            <FacebookSignIn />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap : 10,
    },
});

export default SocialLogin;
