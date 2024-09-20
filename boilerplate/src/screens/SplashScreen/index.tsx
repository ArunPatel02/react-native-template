import React, { useEffect, useCallback, useState } from 'react';
import { Text, StyleSheet, Modal, View } from 'react-native';
import { CompositeSplashScreenProps } from '../../navigation/type';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getValueFromAsyncStorage } from '../../utils/Localstorage';
import { ONBAORDIND_TOUR } from '../../utils/local.constants';
import { useAppDispatch } from '../../store/hook';
import { setSystemData } from '../../store/features/system';
import {
  app_version,
  build_number,
  device_company,
  device_date_time,
  device_id,
  device_model,
  device_timezone,
  os_type,
  os_version,
  push_token,
} from '../../utils/deviceInfo';
import CButton from '../../components/atoms/CButton';
import { checkForceUpdate, getAuthUser } from '../../services/SignInServices/userSignin.service';
import { useTheme } from '../../theme/ThemeProvider';

interface SplashScreenPropsType extends CompositeSplashScreenProps<'Splash'> { }

const SplashScreen: React.FC<SplashScreenPropsType> = ({ navigation }) => {
  const dipatch = useAppDispatch();
  const theme = useTheme()

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: scale(25),
    },
    text: {
      fontSize: moderateScale(30),
      fontWeight: theme.fonts.bold,
      color: theme.colors.text,
    },
    edit: {
      fontSize: moderateScale(20),
      marginTop: verticalScale(10),
      textAlign: 'center',
      color: theme.colors.text,
    },
    editPath: {
      color: '#007BFF',
      textDecorationLine: 'underline',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalText: {
      fontSize: moderateScale(20),
      color: 'black',
      textAlign: 'center',
      marginBottom: verticalScale(20),
    },
    innerContainer: {
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      width: '80%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
    }
  });

  const [modalVisible, setModalVisible] = useState(false); // Added state for modal visibility
  const [forceUpdate, setforceUpdate] = useState(false)

  const setSystemheadersData = useCallback(async () => {
    // console.log("seting the system data in store")
    const deviceidResolve = await device_id;
    const push_tokenResolve = await push_token;
    const deviceInfo = {
      device_id: deviceidResolve,
      os_version,
      os_type,
      app_version,
      build_number,
      push_token: push_tokenResolve,
      device_company,
      device_model,
      device_date_time,
      device_timezone,
    };
    dipatch(setSystemData(deviceInfo));
  }, [dipatch]); // Added dipatch as a dependency

  //set all the initail resources
  const initializeApp = useCallback(async () => {
    try {
      await setSystemheadersData();
      const forceUpdate = await checkForceUpdate()
      if (forceUpdate) {
        setModalVisible(true)
        if (forceUpdate.type === 'force') {
          setforceUpdate(true)
        }
      }
      const user = await getAuthUser();
      if (user) {
        //save the data in redux from here and navigate to home if user is there
        navigation.navigate('App');
      } else {
        getValueFromAsyncStorage(ONBAORDIND_TOUR).then(OnBoardingDone => {
          // Hide the splash screen after 2 seconds
          setTimeout(() => {
            if (!OnBoardingDone) {
              navigation.replace('Welcome');
            } else {
              navigation.navigate('Auth', { screen: 'Signin' })
            }
          }, 2000);
        });
      }
    } catch (error) {
      console.log('error while geting the initial data ', error)
      navigation.navigate('Welcome')
    }
  }, [navigation, setSystemheadersData])

  useEffect(() => {
    initializeApp()
  }, [initializeApp]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to My App</Text>
      <Text style={styles.edit}>
        Edit{' '}
        <Text style={styles.editPath}>/src/Splash/SplashScreen/index.tsx</Text>
      </Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Close modal on request
      >
        <View style={styles.modalContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.modalText}>An update is available!</Text>
            <CButton title="Update Now" onPress={() => {/* Logic to handle update */ }} />
            {!forceUpdate && <CButton title="Later" onPress={() => setModalVisible(false)} />}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default SplashScreen;
