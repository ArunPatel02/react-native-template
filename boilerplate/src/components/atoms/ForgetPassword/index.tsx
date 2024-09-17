import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

interface ForgetPasswordProps {
    onPress: () => void;
}

const ForgetPassword: React.FC<ForgetPasswordProps> = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Forget Password?</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.signupText}> Reset Now</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize : moderateScale(14)
    },
    signupText: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default ForgetPassword;

