import axios from 'axios';

export const BASE_URL = 'https://youtube-search-results.p.rapidapi.com/youtub';

const options = {
  params: {q: 'justin+bieber'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};









