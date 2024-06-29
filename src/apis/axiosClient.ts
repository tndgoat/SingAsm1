import axios from 'axios';
import queryString from 'query-string';
import {appInfo} from '../constants/appInfos';

const axiosClient = axios.create({
  baseURL: appInfo.BASE_URL,
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  async (config: any) => {
    config.headers = {
      Authorization: '',
      Accept: 'application/json',
      ...config.headers,
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  res => {
    if (res.data && res.status === 200) {
      return res.data;
    }
    return Promise.reject(new Error('Error in response'));
  },
  error => {
    console.log(`Error api ${JSON.stringify(error.response)}`);
    return Promise.reject(error);
  }
);

export default axiosClient;
