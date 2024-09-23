import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import { useTheme } from '../../../theme/ThemeProvider';

interface CInputProps extends TextInputProps {
  value: string;
}

const CInput: React.FC<CInputProps> = ({
  value,
  ...rest
}) => {
  const Theme = useTheme()
  return (
    <TextInput
      style={[styles.input , {color : Theme.colors.text}]}
      value={value}
      {...rest}
    />
  );
};

//when we pass ref to child element we have to pass the forward ref to child
export const OtpInput = React.forwardRef<TextInput, CInputProps>((props, ref) => {
  const Theme = useTheme()
  return (
    <TextInput
      style={[styles.input , {color : Theme.colors.text}]}
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
