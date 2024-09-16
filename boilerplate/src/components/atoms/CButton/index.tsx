import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

interface CButtonProps extends TouchableOpacityProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
}

const CButton: React.FC<CButtonProps> = ({ title, onPress, disabled = false , ...rest }) => {
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

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007BFF',
        padding: moderateScale(10),
        borderRadius: moderateScale(5),
        alignItems: 'center',
        marginBottom: moderateScale(10),
    },
    text: {
        color: 'white',
        fontSize: moderateScale(16),
    },
    disabled: {
        backgroundColor: 'gray',
    },
});

export default CButton;
