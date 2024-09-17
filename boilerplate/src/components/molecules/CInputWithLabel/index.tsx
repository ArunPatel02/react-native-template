import React from 'react';
import { View, StyleSheet, TextInputProps } from 'react-native';
import CInputLabel from '../../atoms/CInputLabel';
import CInputError from '../../atoms/CInputError';
import CInput from '../../atoms/CInput';

interface CInputWithLabelProps extends TextInputProps {
    value: string;
    onChangeText: (text: string) => void;
    errorMessage: string;
    label : string
}

const CInputWithLabel: React.FC<CInputWithLabelProps> = ({ label , value, onChangeText, errorMessage , ...rest }) => {
    return (
            <View style={styles.container}>
                <CInputLabel label={label} />
                <CInput value={value} onChangeText={onChangeText} {...rest}/>
                {errorMessage ? <CInputError errorMessage={errorMessage} /> : null}
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width : '100%'
    },
});

export default CInputWithLabel;
