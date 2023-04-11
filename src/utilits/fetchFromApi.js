import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '3112d4c9f5msh698123af14a1ed2p1b8a6bjsneaf1b7b17b60',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  

  export const fetchFromApi = async (url) => {
   const {data} =  await axios.get(`${BASE_URL}/${url}`, options)
   return data
  }