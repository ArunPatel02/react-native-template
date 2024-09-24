import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';

interface DoNotHaveAccountProps {
    onPress: () => void;
}

const DoNotHaveAccount: React.FC<DoNotHaveAccountProps> = ({ onPress }) => {
    const Theme = useTheme()
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            color: Theme.colors.text,
            fontSize : Theme.fontSize.s
        },
        signupText: {
            color: Theme.colors.primary,
            fontSize : Theme.fontSize.s,
            textDecorationLine: 'underline',
        },
    });
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Don't have an account? </Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.signupText}>Sign up</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DoNotHaveAccount;

