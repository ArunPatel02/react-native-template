/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import { _setDataToAsyncStorage } from './src/utils/Localstorage';


PushNotification.createChannel(
  {
    channelId: '123', // (required)
    channelName: 'My channel', // (required)
    channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
    playSound: true, // (optional) default: true
    soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
    // importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
  },
  created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
);

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
    await _setDataToAsyncStorage(UNREAD_NOTIFICATION, JSON.stringify(Platform.OS === 'android' ? (remoteMessage?.notification?.android?.count || '0') : (remoteMessage?.notification?.ios?.badge || '0')) );
    const {notification: msg, data} = remoteMessage;
    PushNotification.localNotification({
      title: msg?.title, // (optional)
      channelId: '123',
      message: msg?.body, // (required)
      playSound: true, // (optional) default: true
      soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
    });
  });
AppRegistry.registerComponent(appName, () => App);
