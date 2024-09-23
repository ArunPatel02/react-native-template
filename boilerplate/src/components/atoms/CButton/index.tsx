import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useTheme } from '../../../theme/ThemeProvider';

interface CButtonProps extends TouchableOpacityProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
}

const CButton: React.FC<CButtonProps> = ({ title, onPress, disabled = false , ...rest }) => {

    const Theme = useTheme()

    const styles = StyleSheet.create({
        button: {
            backgroundColor: Theme.colors.primary,
            padding: moderateScale(10),
            borderRadius: moderateScale(5),
            marginBottom: moderateScale(10),
        },
        text: {
            color: 'white',
            textAlign : 'center',
            fontSize: Theme.fontSize.m,
        },
        disabled: {
            backgroundColor: 'gray',
        },
    });

    return (
        <TouchableOpacity 
            style={[styles.button, disabled && styles.disabled]} 
            onPress={disabled ? undefined : onPress} 
            disabled={disabled}
            {...rest}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CButton;
