import { Method } from 'axios';
import * as React from 'react';
import UseFetchData from './UseFetchData';

export default (endpoint: string, callback: Function = () => {}, method: Method = 'GET') => {
  const fetchData = UseFetchData(endpoint, callback, method);

  return React.useEffect((data: Object = {}) => {
    fetchData(data);
  }, [endpoint]);
}
