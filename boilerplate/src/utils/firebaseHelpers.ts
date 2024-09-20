import {PermissionsAndroid, Platform} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {MESSAGING} from './constants';
import { _setDataToAsyncStorage } from './Localstorage';
import { FCM_TOKEN } from './local.constants';

const requestUserPermission = async () => {
  try {
    await MESSAGING.registerDeviceForRemoteMessages();
    // console.log({registration});
    const authorizationStatus = await MESSAGING.requestPermission();
    console.log({
      authorizationStatus,
      os: Platform.OS,
      PROVISIONAL: messaging.AuthorizationStatus.PROVISIONAL,
      AUTHORIZED: messaging.AuthorizationStatus.AUTHORIZED,
    });
    const isGranted = await requestNotificationPermission();
    const enabled =
      authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled && isGranted) {
      console.log('Authorization status:', authorizationStatus);
      getFCMToken();
    }
  } catch (error) {
    console.log('error in requestUserPermission for fcm ', error);
  }
};

// const requestNotificationPermission = async () => {
//   const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
//   return result;
// };

// const checkNotificationPermission = async () => {
//   const result = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
//   return result;
// };

// const requestNotificationPermissionAndroid = async () => {
//   const checkPermission = await checkNotificationPermission();
//   if (checkPermission !== RESULTS.GRANTED) {
//    const request = await requestNotificationPermission();
//      if(request !== RESULTS.GRANTED){
//           // permission not granted
//       }
//   }
// };

const requestNotificationPermission = async () => {
  if (Platform.OS === 'android') {
    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    console.log('result', result);
    return result;
  }
  return true;
};

const getFCMToken = async () => {
  console.log('Reached herer----Tokening');
  try {
    const currentToken = null;
    console.log({currentToken});
    if (currentToken) {
      return currentToken;
    }
    const fcmToken = await MESSAGING.getToken().then(res => res);
    console.log({fcmToken});
    await _setDataToAsyncStorage(FCM_TOKEN, fcmToken);
    return fcmToken;
  } catch (error) {
    console.log('Errro getting token', error);
    return null;
  }
};

export {getFCMToken, requestUserPermission, requestNotificationPermission};
