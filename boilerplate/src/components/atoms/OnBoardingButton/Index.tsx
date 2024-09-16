import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { DoneButtonProps, NextButtonProps, SkipButtonProps } from 'react-native-onboarding-swiper';
import {moderateScale} from 'react-native-size-matters';

interface CustomSkipButtonProps extends SkipButtonProps {
    title : string
}

interface CustomNextButtonProps extends NextButtonProps {
    title : string
}

interface CustomDoneButtonProps extends DoneButtonProps {
    title : string
}

const OnBoardingButton: React.FC<CustomSkipButtonProps | CustomNextButtonProps | CustomDoneButtonProps> = ({...props}) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>
);

export default OnBoardingButton;

const styles = StyleSheet.create({
  button: {marginHorizontal: 10},
  buttonText: {fontSize: moderateScale(16)},
});
