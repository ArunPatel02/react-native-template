import React from 'react';
import { Image } from 'react-native';

import Onboarding, { DoneButtonProps, NextButtonProps, SkipButtonProps } from 'react-native-onboarding-swiper';
import { RootStackPropsType } from '../../navigation/type';
import OnBoardingButton from '../../components/atoms/OnBoardingButton/Index';
import OnBoardingDots from '../../components/atoms/OnBoardingDots';
import { _setDataToAsyncStorage } from '../../utils/Localstorage';
import { ONBAORDIND_TOUR } from '../../utils/local.constants';



const SkipButton : React.FC<SkipButtonProps> = (props) => <OnBoardingButton {...props} title="Skip" />;
const NextButton : React.FC<NextButtonProps> = (props) => <OnBoardingButton {...props} title="Next" />;
const DoneButton : React.FC<DoneButtonProps> = (props) => <OnBoardingButton {...props} title="Done" />;

// Define the props for the HomeScreen component that is import from navigation/types.ts
interface OnboardingScreenPropsType extends RootStackPropsType<'Welcome'>{}

const OnboardingScreen : React.FC<OnboardingScreenPropsType> = ({navigation}) => {
  const handleSkipAndDone = async()=>{
    await _setDataToAsyncStorage(ONBAORDIND_TOUR , 'done')
    navigation.replace('Auth' , {screen : 'Signin'})
  }
    return (
        <Onboarding
        SkipButtonComponent={SkipButton}
        NextButtonComponent={NextButton}
        DoneButtonComponent={DoneButton}
        DotComponent={OnBoardingDots}
        onSkip={() => navigation.replace('Auth' , {screen : 'Signin'})}
        onDone={() => handleSkipAndDone()}
        pages={[
          {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../../assets/onboarding-img1.png')} />,
            title: 'Connect to the World',
            subtitle: 'A New Way To Connect With The World',
          },
          {
            backgroundColor: '#fdeb93',
            image: <Image source={require('../../assets/onboarding-img2.png')} />,
            title: 'Share Your Favorites',
            subtitle: 'Share Your Thoughts With Similar Kind of People',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image source={require('../../assets/onboarding-img3.png')} />,
            title: 'Become The Star',
            subtitle: 'Let The Spot Light Capture You',
          },
        ]}
      />
    );
};

export default OnboardingScreen;
