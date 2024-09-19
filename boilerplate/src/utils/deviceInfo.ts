import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {getValueFromAsyncStorage} from './Localstorage';
import {FCM_TOKEN} from './local.constants';

// const device_id = DeviceInfo.getDeviceId();
const device_id = DeviceInfo.getUniqueId();
const ip_address = DeviceInfo.getIpAddress();
const os_version = DeviceInfo.getSystemVersion();
const os_type = Platform.OS;
const app_version = DeviceInfo.getVersion();
const build_number = DeviceInfo.getBuildNumber();
const push_token = getValueFromAsyncStorage(FCM_TOKEN);
const device_company = DeviceInfo.getBrand();
const device_model =
  Platform.OS === 'ios' ? DeviceInfo.getDeviceId() : DeviceInfo.getModel();
const device_date_time = new Date().toString();
const device_timezone = new Date().getTimezoneOffset();

export {
  device_id,
  ip_address,
  os_version,
  os_type,
  app_version,
  build_number,
  push_token,
  device_company,
  device_model,
  device_date_time,
  device_timezone,
};
