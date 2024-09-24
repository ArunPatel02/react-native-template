import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';

interface AllreadyHaveAccountProps {
    onPress: () => void;
}

//conponent to pass the already have account text
const AllreadyHaveAccount: React.FC<AllreadyHaveAccountProps> = ({ onPress }) => {
    const Thene = useTheme()
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            color: Thene.colors.text,
            fontSize : Thene.fontSize.s
        },
        signupText: {
            color: Thene.colors.primary,
            fontSize : Thene.fontSize.s,
            textDecorationLine: 'underline',
        },
    });
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Already have an account? </Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.signupText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AllreadyHaveAccount;

