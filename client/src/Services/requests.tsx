import axios, {AxiosResponse, Method} from 'axios';
import {Entity} from '../Types/Entity';

export const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const oauthEndpoint = `${backendUrl}/reconnect-pro-login-trigger`;
export const adminEndpoint = `${backendUrl}/admin`;
export const apiEndpoint = `${backendUrl}/api`;
export const centersEndpoint = `${apiEndpoint}/centers`;
export const dropdownsEndpoint = `${apiEndpoint}/dropdowns`;
export const loginEndpoint = `${backendUrl}/login`;
export const googleLoginEndpoint = `${backendUrl}/google-login-trigger`;
export const logoutEndpoint = `${backendUrl}/logout`;
export const permanencesEndpoint = `${apiEndpoint}/permanences`;
export const tagsEndpoint = `${apiEndpoint}/tags`;
export const workshopsEndpoint = `${apiEndpoint}/workshops`;

export const paginationCount = 30;

export const buildEntityEndpoint = (entity: Entity) => `${backendUrl}${entity['@id']}`;

const axiosInstance = axios.create();
axiosInstance.defaults.withCredentials = true

export const makeRequest = async (url: string, method: Method = 'get', data: Object = {}): Promise<AxiosResponse> =>
  axiosInstance({method, url, headers: {}, data});
