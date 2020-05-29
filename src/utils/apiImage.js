import {apiUrl} from '../constants';

export const apiImage = async (url, args) => { 
  const getToken = localStorage.getItem('myToken');
  const response = await fetch(`${apiUrl}${url}`, {
   ...args,
    headers: {
      "Accept": 'application/json',
      "Authorization": `Bearer ${getToken}`,
      ...args.headers,  
    },
  });
      
 return response.json();      
}