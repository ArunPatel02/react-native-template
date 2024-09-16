import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

interface CInputLabelProps {
    label: string;
}

const CInputLabel: React.FC<CInputLabelProps> = ({ label }) => {
    return (
        <Text style={styles.label}>{label}</Text>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: moderateScale(16),
        marginBottom: moderateVerticalScale(8),
        color: 'black',
    },
});

export default CInputLabel;
