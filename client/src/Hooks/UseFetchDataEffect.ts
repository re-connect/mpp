import { Method } from 'axios';
import * as React from 'react';
import UseFetchData from './UseFetchData';

const useFetchData = (endpoint: string, callback: Function = () => {
}, method: Method = 'GET') => {
  const fetchData = UseFetchData(endpoint, callback, method);

  return React.useEffect((data: Object = {}) => {
    fetchData(data);
  }, [endpoint]);
}

export default useFetchData;