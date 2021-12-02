import { Method } from 'axios';
import * as React from 'react';
import { makeRequest } from '../Services/requests';

export default (endpoint: string, callback: Function | null, method: Method = 'get') => {
  return React.useCallback(async (body) => {
    try {
      const {data} = await makeRequest(endpoint, method, body);
      if (null !== callback) {
        callback(data);
      }
    } catch (e) {
      console.log('Error making http call', endpoint, e.message);
    }
  }, []);
}
