import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

interface AllreadyHaveAccountProps {
    onPress: () => void;
}

const AllreadyHaveAccount: React.FC<AllreadyHaveAccountProps> = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Already have an account? </Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.signupText}>Login</Text>
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

export default AllreadyHaveAccount;

