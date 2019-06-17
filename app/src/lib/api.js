import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api';

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
  }

export default {
getPlaces: async (activity,location,cb) => {
  try {
      await axios.get(`/search?activity=${activity}&location=${location}`) 
      .then(response => {
        return response;
      })
      .then(checkStatus)
      .then(cb)  
    } catch (error) {
    return error;
  }
}
}
