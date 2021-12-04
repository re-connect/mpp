import axios, { AxiosResponse, Method } from 'axios';
import { Entity } from '../Types/Entity';

export const backendUrl =
  process.env.NODE_ENV === 'production' ? 'https://api.mpp.reconnect.fr' : 'https://localhost:8000';

export const adminEndpoint = `${backendUrl}/admin`;
export const apiEndpoint = `${backendUrl}/api`;
export const centersEndpoint = `${apiEndpoint}/centers`;
export const dropdownsEndpoint = `${apiEndpoint}/dropdowns`;
export const loginEndpoint = `${backendUrl}/login`;
export const logoutEndpoint = `${backendUrl}/logout`;
export const notesEndpoint = `${apiEndpoint}/notes`;
export const tagsEndpoint = `${apiEndpoint}/tags`;
export const workshopsEndpoint = `${apiEndpoint}/workshops`;

export const paginationCount = 30;

export const buildEntityEndpoint = (entity: Entity) => `${backendUrl}${entity['@id']}`;

const axiosInstance = axios.create();
axiosInstance.defaults.withCredentials = true

export const makeRequest = async (url: string, method: Method = 'get', data: Object = {}): Promise<AxiosResponse> =>
  axiosInstance({method, url, headers: {}, data});
