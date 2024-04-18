import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { CK_JWT_TOKEN } from 'src/states/common';

interface RequestConfig {
  url: string;
  baseUrl?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  params?: Record<string, unknown>;
}

export const API = {
  request: (config: RequestConfig) => {
    const { baseUrl = '', method = 'GET', url, params } = config;
    const token = Cookies.get(CK_JWT_TOKEN);
    const requestConfig: AxiosRequestConfig = {
      url: `${baseUrl}${url}`,
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : undefined
      },
      data: method !== 'GET' ? params : undefined,
      params
    };

    return axios(requestConfig)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        return e;
      });
  }
};
