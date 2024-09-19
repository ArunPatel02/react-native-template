import React, {useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';
import {CompositeSplashScreenProps} from '../../navigation/type';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getValueFromAsyncStorage} from '../../utils/Localstorage';
import {ONBAORDIND_TOUR} from '../../utils/local.constants';

interface SplashScreenPropsType extends CompositeSplashScreenProps<'Splash'> {}

const SplashScreen: React.FC<SplashScreenPropsType> = ({navigation}) => {
  useEffect(() => {
      getValueFromAsyncStorage(ONBAORDIND_TOUR).then(OnBoardingDone => {
          // Hide the splash screen after 2 seconds
          setTimeout(() => {
        if(!OnBoardingDone){
            navigation.replace('Welcome');
        }else{
            navigation.navigate('Auth' , {screen : 'Signin'})
        }
      }, 2000);
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to My App</Text>
      <Text style={styles.edit}>
        Edit{' '}
        <Text style={styles.editPath}>/src/Splash/SplashScreen/index.tsx</Text>
      </Text>
    </SafeAreaView>
  );
};

//define all screen styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: scale(25),
  },
  text: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    color: 'black',
  },
  edit: {
    fontSize: moderateScale(20),
    marginTop: verticalScale(10),
    textAlign: 'center',
    color: 'black',
  },
  editPath: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default SplashScreen;
