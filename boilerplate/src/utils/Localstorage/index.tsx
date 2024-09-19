import AsyncStorage from '@react-native-async-storage/async-storage';
import {CONFIRMATION, TOKEN, UNREAD_NOTIFICATION, USER , LOGIN_TYPE} from '../local.constants';

export const _setDataToAsyncStorage = async (key : string, data : any) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    console.log(error);
  }
};

export const clearForLogout = async () => {
  await AsyncStorage.removeItem(USER);
  await AsyncStorage.removeItem(TOKEN);
  await AsyncStorage.removeItem(CONFIRMATION);
  await AsyncStorage.removeItem(LOGIN_TYPE);
  await AsyncStorage.removeItem(UNREAD_NOTIFICATION);
};

export const clearStorageData = async () => {
  AsyncStorage.clear();
};

export const removeValueStorageData = async (key : string) => {
  await AsyncStorage.removeItem(key);
};

export const getValueFromAsyncStorage = async (key : string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      return null;
    }
  } catch (error) {
    // Error retrieving data
    return null;
  }
};