/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Store } from 'redux';
import qs from 'qs';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_HOST}`,
  timeout: Number(process.env.REACT_APP_DEFAULT_API_TIMEOUT || 1000),
  paramsSerializer: params => {
    return qs.stringify(params, {
      arrayFormat: 'brackets',
      encodeValuesOnly: true,
    });
  },
});

export const configureAxios = (store: Store) => {
  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );

  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );
};

export const setAuthenticationHeader = (token?: string | null): void => {
  instance.defaults.headers.common['Authentication'] = token || '';
};

const API = {
  get: <T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => instance.get(url, config),
  delete: <T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
    instance.delete(url, config),
  post: <T = any>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
    instance.post(url, data, config),
  put: <T = any>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
    instance.put(url, data, config),
};

export default API;
