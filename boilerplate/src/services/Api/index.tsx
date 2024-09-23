import axios from 'axios';
import {getValueFromAsyncStorage} from '../../utils/Localstorage';
import {TOKEN} from '../../utils/local.constants';

const AxiosInstance = axios.create({
  baseURL: 'https://chatbuddyapi-production.up.railway.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosInstance.interceptors.request.use(async function (config) {
  // console.log("this is the headers : ", config.headers)
  // Do something before request is sent
  let token = await getValueFromAsyncStorage(TOKEN);
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
