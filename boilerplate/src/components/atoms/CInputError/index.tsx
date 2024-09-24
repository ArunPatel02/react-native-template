import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';

interface CInputErrorProps {
    errorMessage: string;
}

//cutom error component to show error message
const CInputError: React.FC<CInputErrorProps> = ({ errorMessage }) => {
    const Theme = useTheme();
    const styles = StyleSheet.create({
        errorText: {
            fontSize: Theme.fontSize.s,
            color: Theme.colors.error,
            marginTop: 4,
        },
    });

    return (
        <Text style={styles.errorText}>{errorMessage}</Text>
    );
};

export default CInputError;
