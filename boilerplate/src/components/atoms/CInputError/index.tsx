import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

interface CInputErrorProps {
    errorMessage: string;
}

const CInputError: React.FC<CInputErrorProps> = ({ errorMessage }) => {
    return (
        <Text style={styles.errorText}>{errorMessage}</Text>
    );
};

const styles = StyleSheet.create({
    errorText: {
        fontSize: moderateScale(14),
        color: 'red',
        marginTop: verticalScale(4),
    },
});

export default CInputError;
