import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import CInputLabel from '../../atoms/CInputLabel';
import { moderateScale } from 'react-native-size-matters';
import PhoneInputAtom from '../../atoms/PhoneInputAtom';
import { PhoneInputProps } from 'react-native-phone-number-input';

interface CPhoneInputProps extends PhoneInputProps {
    value: string;
    onChangeText: (text: string) => void;
    errorMessage : string
}

const CPhoneInput: React.FC<CPhoneInputProps> = ({ value, onChangeText , errorMessage , ...rest }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <CInputLabel label="Enter Phone Number" />
                <PhoneInputAtom 
                    value={value} 
                    onChangeText={onChangeText}
                    errorMessage={errorMessage}
                    {...rest}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent : 'center',
    },
    label: {
        fontSize: moderateScale(16),
        marginBottom: moderateScale(8),
        color: 'black',
    },
});

export default CPhoneInput;
