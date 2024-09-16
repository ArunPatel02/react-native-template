import React from 'react';
import { View } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import CInputError from '../../atoms/CInputError';

interface PhoneInputContainerProps {
    value: string;
    onChangeText: (text: string) => void;
    setFormattedValue : (text : string) => void;
    errorMessage?: string;
}

const PhoneInputContainer: React.FC<PhoneInputContainerProps> = ({ value, onChangeText, setFormattedValue, errorMessage}) => {
    return (
        <View>
            <PhoneInput
                // ref={phoneInput}
                defaultValue={value}
                defaultCode="IN"
                layout="first"
                onChangeText={(text) => {
                    onChangeText(text);
                }}
                onChangeFormattedText={(text) => {
                    setFormattedValue(text);
                }}
                textInputStyle={{padding : 0}}
                withShadow
                autoFocus
            />
            {errorMessage && <CInputError errorMessage={errorMessage} />}
        </View>
    );
};

export default PhoneInputContainer;
