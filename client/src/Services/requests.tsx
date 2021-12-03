import axios, { Method } from 'axios';
import { Entity } from '../Types/Entity';

export const backendUrl =
  process.env.NODE_ENV === 'production' ? 'https://api.mpp.reconnect.fr' : 'https://localhost:8000';
export const apiEndpoint = `${backendUrl}/api`;

export const adminLoginEndpoint = `${backendUrl}/admin_login`;
export const ageBreakpointsEndpoint = `${apiEndpoint}/age_breakpoints`;
export const centersEndpoint = `${apiEndpoint}/centers`;
export const dropdownsEndpoint = `${apiEndpoint}/dropdowns`;
export const equipmentSuppliersEndpoint = `${apiEndpoint}/equipment_suppliers`;
export const loginEndpoint = `${backendUrl}/login`;
export const notesEndpoint = `${apiEndpoint}/notes`;
export const participantKindsEndpoint = `${apiEndpoint}/participant_kinds`;
export const skillsEndpoint = `${apiEndpoint}/skills`;
export const tagsEndpoint = `${apiEndpoint}/tags`;
export const topicsEndpoint = `${apiEndpoint}/topics`;
export const usedEquipmentsEndpoint = `${apiEndpoint}/used_equipments`;
export const workshopsEndpoint = `${apiEndpoint}/workshops`;

export const paginationCount = 30;

export const buildEntityEndpoint = (entity: Entity) => `${backendUrl}${entity['@id']}`;

export const makeRequest = async (url: string, method: Method = 'get', data: Object = {}): Promise<any> => {
  const token = localStorage.getItem("token");
  if (null !== token) {
    const headers = {Authorization: `Bearer ${token}`};

    return axios({method, url, headers, data});
  } else {
    if (window.location.pathname !== '/login') {
      window.location.href = '/login';
    }
  }
}
