import { Method } from 'axios';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { makeRequest } from '../Services/requests';

export default (endpoint: string, callback: Function|null, method: Method = 'get') => {
  const history = useHistory();
  
  return React.useCallback(async (body) => {
    try {
      const { data } = await makeRequest(history, endpoint, method, body);
      if (null !== callback) {
        callback(data);
      }
    } catch (e) {
      history.push("/login");
    }
  }, [history, endpoint]);
}
