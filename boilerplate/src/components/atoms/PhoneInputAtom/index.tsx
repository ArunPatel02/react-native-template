import React from 'react';
import { View } from 'react-native';
import PhoneInput, { PhoneInputProps } from 'react-native-phone-number-input';
import CInputError from '../CInputError';

interface PhoneInputAtomProps extends PhoneInputProps {
    value: string;
    onChangeText: (text: string) => void;
    errorMessage?: string;
}

const PhoneInputAtom: React.FC<PhoneInputAtomProps> = ({ value, onChangeText, errorMessage , ...rest}) => {
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
                textInputStyle={{padding : 0}}
                withShadow
                autoFocus
                {...rest}
            />
            {errorMessage && <CInputError errorMessage={errorMessage} />}
        </View>
    );
};

export default PhoneInputAtom;
