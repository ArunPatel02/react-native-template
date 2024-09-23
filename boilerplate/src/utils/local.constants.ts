const USER = 'user';
const TOKEN = 'TOKEN';
const CONFIRMATION = 'confirmation';
const ONBAORDIND_TOUR = 'ONBAORDIND_TOUR';
const FCM_TOKEN = 'FCM_TOKEN';
const UNREAD_NOTIFICATION = 'UNREAD_NOTIFICATION';
const LOGIN_TYPE = 'login_type';
const MODE = 'mode'

const ENVIRONMENT = {
    STAGING: 'STAGING',
    PRODUCTION: 'PRODUCTION',
  };

  // environment variables
const currentEnv = ENVIRONMENT.STAGING // make sure to change this while building build
  
  const envVariables = {
    [ENVIRONMENT.PRODUCTION]: {
      API_URL:  'http://expample.production.com',
      UX_CAM: true,
    },
    [ENVIRONMENT.STAGING]: {
      API_URL: 'http://expample.staging.com',
      UX_CAM: false,
    }
}

export {
    USER,
    TOKEN,
    CONFIRMATION,
    ONBAORDIND_TOUR,
    FCM_TOKEN,
    UNREAD_NOTIFICATION,
    MODE,
    LOGIN_TYPE,
    currentEnv,
    envVariables,
}