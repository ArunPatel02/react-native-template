import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';

interface ForgetPasswordProps {
    onPress: () => void;
}

//custom component to render Forgetpassword
const ForgetPassword: React.FC<ForgetPasswordProps> = ({ onPress }) => {
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
        resetNowText: {
            color: Theme.colors.primary,
            fontSize : Theme.fontSize.s,
            textDecorationLine: 'underline',
        },
    });
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Forget Password?</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.resetNowText}> Reset Now</Text>
            </TouchableOpacity>
        </View>
    );
};



export default ForgetPassword;

