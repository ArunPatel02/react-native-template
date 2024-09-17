import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

interface DoNotHaveAccountProps {
    onPress: () => void;
}

const DoNotHaveAccount: React.FC<DoNotHaveAccountProps> = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Don't have an account? </Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.signupText}>Sign up</Text>
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

export default DoNotHaveAccount;

