import axios from 'axios';
import constants from './constants';
import Credentials from './credentials';

const instance = axios.create({
  baseURL: constants.API_URL,
});

instance.interceptors.request.use(config => {
  if (Credentials.hasCredentials()) {
    config.headers['access-token'] = Credentials.accessToken;
    config.headers.client = Credentials.client;
    config.headers.uid = Credentials.uid;
  }

  return config;
});

export default instance;
