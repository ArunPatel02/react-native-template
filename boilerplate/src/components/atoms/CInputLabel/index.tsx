import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
import { useTheme } from '../../../theme/ThemeProvider';

interface CInputLabelProps {
    label: string;
}

const CInputLabel: React.FC<CInputLabelProps> = ({ label }) => {

    const Theme = useTheme()

    const styles = StyleSheet.create({
        label: {
            fontSize: Theme.fontSize.s,
            marginBottom: moderateVerticalScale(8),
            color: Theme.colors.text,
        },
    });
    return (
        <Text style={styles.label}>{label}</Text>
    );
};

export default CInputLabel;
