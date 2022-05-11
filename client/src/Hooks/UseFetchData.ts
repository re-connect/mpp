import { Method } from 'axios';
import * as React from 'react';
import { loginEndpoint, makeRequest } from '../Services/requests';

export default (endpoint: string, callback: Function = () => {}, method: Method = 'GET') => React.useCallback(async (body: Object = {}) => {
  try {
    const response = await makeRequest(endpoint, method, body);
    if (null !== callback) {
      callback(response.data);
    }
    if (response.request.responseURL === loginEndpoint && window.location.pathname !== '/login') {
      window.location.replace('login');
    }
  } catch (e: any) {
    console.log('Error making http call', endpoint, e.message);
  }
}, [endpoint]);
