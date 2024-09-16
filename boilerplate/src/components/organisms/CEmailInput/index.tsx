import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';
import CInputLabel from '../../atoms/CInputLabel';
import CInputError from '../../atoms/CInputError'; // Assuming you want to show error messages
import { moderateScale } from 'react-native-size-matters';

interface CEmailInputProps {
    value: string;
    onChangeText: (text: string) => void;
    errorMessage: string;
}

const CEmailInput: React.FC<CEmailInputProps> = ({ value, onChangeText, errorMessage }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <CInputLabel label="Enter Email Address" />
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholder="example@example.com"
                />
                {errorMessage ? <CInputError errorMessage={errorMessage} /> : null}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        height: moderateScale(40),
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: moderateScale(10),
        marginBottom: moderateScale(4),
    },
});

export default CEmailInput;
