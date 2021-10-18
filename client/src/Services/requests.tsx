export const backendUrl =
  process.env.NODE_ENV === 'production' ? 'https://api.mpp.reconnect.fr' : 'https://localhost:8000';
export const apiEndpoint = `${backendUrl}/api`;

export const centersEndpoint = `${apiEndpoint}/centers`;
export const tagsEndpoint = `${apiEndpoint}/tags`;
export const loginEndpoint = `${backendUrl}/login`;
export const adminLoginEndpoint = `${backendUrl}/admin_login`;
export const notesEndpoint = `${apiEndpoint}/notes`;

export const paginationCount = 30;