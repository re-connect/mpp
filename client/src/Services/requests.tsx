import axios, { Method } from 'axios';
import { Entity } from '../Types/Entity';

export const backendUrl =
  process.env.NODE_ENV === 'production' ? 'https://api.mpp.reconnect.fr' : 'https://localhost:8000';
export const apiEndpoint = `${backendUrl}/api`;

export const centersEndpoint = `${apiEndpoint}/centers`;
export const tagsEndpoint = `${apiEndpoint}/tags`;
export const loginEndpoint = `${backendUrl}/login`;
export const adminLoginEndpoint = `${backendUrl}/admin_login`;
export const notesEndpoint = `${apiEndpoint}/notes`;
export const workshopsEndpoint = `${apiEndpoint}/workshops`;
export const topicsEndpoint = `${apiEndpoint}/topics`;
export const skillsEndpoint = `${apiEndpoint}/skills`;
export const participantKindsEndpoint = `${apiEndpoint}/participant_kinds`;
export const equipmentSuppliersEndpoint = `${apiEndpoint}/equipment_suppliers`;
export const ageBreakpointsEndpoint = `${apiEndpoint}/age_breakpoints`;
export const usedEquipmentsEndpoint = `${apiEndpoint}/used_equipments`;

export const paginationCount = 30;

export const buildEntityEndpoint = (entity: Entity) => `${backendUrl}${entity['@id']}`;

export const makeRequest = async (history: any, url: string, method: Method = 'get', data: Object = {}): Promise<any> => {
  const token = localStorage.getItem("token");
  if (null === token) {
    history.push("/login");
  }
  const headers = { Authorization: `Bearer ${token}` };

  return axios({ method, url, headers, data });
}
