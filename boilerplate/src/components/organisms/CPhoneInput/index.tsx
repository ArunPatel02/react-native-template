import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import PhoneInputContainer from '../../molecules/PhoneInputConatainer';
import CInputLabel from '../../atoms/CInputLabel';
import { moderateScale } from 'react-native-size-matters';

interface CPhoneInputProps {
    value: string;
    onChangeText: (text: string) => void;
    setFormattedValue: (text: string) => void;
    errorMessage : string
}

const CPhoneInput: React.FC<CPhoneInputProps> = ({ value, onChangeText, setFormattedValue , errorMessage }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <CInputLabel label="Enter Phone Number" />
                <PhoneInputContainer 
                    value={value} 
                    onChangeText={onChangeText} 
                    setFormattedValue={setFormattedValue} 
                    errorMessage={errorMessage}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow : 1,
        flex : 1,
        justifyContent : 'center',
    },
    label: {
        fontSize: moderateScale(16),
        marginBottom: moderateScale(8),
        color: 'black',
    },
});

export default CPhoneInput;
