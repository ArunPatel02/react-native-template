import React from 'react';
import { View } from 'react-native';
import PhoneInput, { PhoneInputProps } from 'react-native-phone-number-input';
import CInputError from '../CInputError';
import { useTheme } from '../../../theme/ThemeProvider';

interface PhoneInputAtomProps extends PhoneInputProps {
    value: string;
    onChangeText: (text: string) => void;
    errorMessage?: string;
}

//phone number input in login screen
const PhoneInputAtom: React.FC<PhoneInputAtomProps> = ({ value, onChangeText, errorMessage , ...rest}) => {
    const Theme = useTheme()
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
                codeTextStyle={{fontSize : Theme.fontSize.s}}
                textInputStyle={{padding : 0 , fontSize : Theme.fontSize.s}}
                withShadow
                autoFocus
                {...rest}
            />
            {errorMessage && <CInputError errorMessage={errorMessage} />}
        </View>
    );
};

export default PhoneInputAtom;
