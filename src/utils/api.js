import {apiUrl} from '../constants';

export const api = async (url, args) => { 
  const getToken = localStorage.getItem('myToken');
  const response = await fetch(`${apiUrl}${url}`, {
   ...args,
    headers: {
      "Content-type": "application/json; charset=UTF-8 ",
      "Accept": 'application/json',
      "Authorization": `Bearer ${getToken}`,
      ...args.headers,  
    },
  });
      
 return response.json();      
}