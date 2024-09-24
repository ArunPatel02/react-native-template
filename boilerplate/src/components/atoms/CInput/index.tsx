import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import { useTheme } from '../../../theme/ThemeProvider';

interface CInputProps extends TextInputProps {
  value: string;
}

//custom input component
const CInput: React.FC<CInputProps> = ({
  value,
  ...rest
}) => {
  const Theme = useTheme()
  return (
    <TextInput
      style={[styles.input , {color : Theme.colors.text , fontSize : Theme.fontSize.s}]}
      placeholderTextColor={Theme.colors.placeholderTextColor}
      value={value}
      {...rest}
    />
  );
};

//when we pass ref to child element we have to pass the forward ref to child
//curom otp component with ref to use ref where this component will be used
export const OtpInput = React.forwardRef<TextInput, CInputProps>((props, ref) => {
  const Theme = useTheme()
  return (
    <TextInput
      style={[styles.input , {color : Theme.colors.text , fontSize : Theme.fontSize.s , borderColor : 'red'}]}
      {...props}
      ref={ref} // Forward the ref to the TextInput
    />
  );
});

const styles = StyleSheet.create({
  input: {
    height: moderateScale(40),
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width : '100%',
    paddingHorizontal: moderateScale(10),
    marginBottom: moderateScale(4),
  },
});

export default CInput;
