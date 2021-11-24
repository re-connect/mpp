import { Method } from 'axios';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { makeRequest } from '../Services/requests';

export default (endpoint: string, callback: Function, method: Method = 'get') => {
  const history = useHistory();
  
  return React.useCallback(async () => {
    try {
      const { data } = await makeRequest(history, endpoint, method);
      callback(data['hydra:member']);
    } catch (e) {
      history.push("/login");
    }
  }, [history]);
}
