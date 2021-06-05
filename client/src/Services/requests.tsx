export const backendUrl =
  process.env.NODE_ENV === 'production' ? 'https://api.mpp.reconnect.fr' : 'https://localhost:8002';
export const apiEndpoint = `${backendUrl}/api`;

export const centersEndpoint = `${apiEndpoint}/centers`;
export const loginEndpoint = `${backendUrl}/login`;
export const adminLoginEndpoint = `${backendUrl}/admin_login`;
export const notesEndpoint = `${apiEndpoint}/notes`;
