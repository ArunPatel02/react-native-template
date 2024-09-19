import axios from 'axios';
import {getValueFromAsyncStorage} from '../../utils/Localstorage';
import {TOKEN} from '../../utils/local.constants';
import {
  device_id,
  os_type,
  os_version,
  app_version,
  build_number,
  device_company,
  device_model,
  device_date_time,
  device_timezone,
} from '../../utils/deviceInfo';

const AxiosInstance = axios.create({
  // baseURL: "http://192.168.1.3:5000",
  baseURL: 'https://chatbuddyapi-production.up.railway.app',
  headers: {
    'Content-Type': 'application/json',
    os_version,
    os_type,
    app_version,
    build_number,
    device_company,
    device_model,
    device_date_time,
    device_timezone,
  },
});

AxiosInstance.interceptors.request.use(async function (config) {
  // Do something before request is sent
  let token = await getValueFromAsyncStorage(TOKEN);
  const DeviceIdResolve = await device_id
  console.log(
    'this is header Data --- ',
   { DeviceIdResolve,
    os_version,
    os_type,
    app_version,
    build_number,
    device_company,
    device_model,
    device_date_time,
    device_timezone,}
  );
  config.headers['device_id'] = DeviceIdResolve
  // console.log("this is token", token);
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

AxiosInstance.interceptors.response.use(function (response) {
  // console.log("response" + response);
  return response;
});

export default AxiosInstance;
