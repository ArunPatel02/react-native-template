/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation/RootStack';
import { AppState, Platform, StatusBar } from 'react-native';
import { requestUserPermission } from './src/utils/firebaseHelpers';
import { MESSAGING } from './src/utils/constants';
import PushNotification from 'react-native-push-notification';
import { FCM_TOKEN, UNREAD_NOTIFICATION } from './src/utils/local.constants';
import { _setDataToAsyncStorage } from './src/utils/Localstorage';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { ThemeProvider } from './src/theme/ThemeProvider';
import { FileLogger } from 'react-native-file-logger';



const App: React.FC = () => {

  useEffect(() => {

    //file to store logs only works when enable flag is true
    const enableFileLogger = true
    if(enableFileLogger){
      FileLogger.configure({
        captureConsole : true,
        dailyRolling : true,
        maximumFileSize : 1024 * 1024,
        maximumNumberOfFiles : 7,
      });
      FileLogger.debug('this is the test for file logging');
      FileLogger.getLogFilePaths().then((path)=>{
        console.log('the path is: ' + path);
      })
    }
    

    requestUserPermission()

    MESSAGING.onTokenRefresh(async newToken => {
      console.log('newToken', newToken);
      await _setDataToAsyncStorage(FCM_TOKEN, newToken); //pass refresh token to your api endpoint
    })

    const unsubscribe = MESSAGING.onMessage(async remoteMessage => {
      try {
        console.log(
          'A new FCM message arrived!',
          JSON.stringify(remoteMessage),
        );
        await _setDataToAsyncStorage(
          UNREAD_NOTIFICATION,
          JSON.stringify(
            Platform.OS === 'android'
              ? remoteMessage?.notification?.android?.count || '0'
              : remoteMessage?.notification?.ios?.badge || '0',
          ),
        );
        const msg = remoteMessage.notification;
        PushNotification.localNotification({
          title: msg?.title, // (optional)
          channelId: '123',
          message: msg?.body, // (required)
          playSound: true, // (optional) default: true
          soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
          vibrate: true,
        });
      } catch (error) {
        console.log('error in foreground notificaiton');
      }
    });

    // app state change
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        console.log(
          'App has come to the foreground! =================================================',
        );
      }
    });

    return () => {
      unsubscribe;
      subscription.remove();
    };
  }, [])

  return (
    <ThemeProvider>
    <Provider store={store}>
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor={'transparent'}/>
      <Navigation />
    </SafeAreaProvider>
    </Provider>
    </ThemeProvider>
  );
}

export default App;
