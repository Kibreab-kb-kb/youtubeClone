import axios from "axios";

const BASE_URL='https://youtube-v3-alternative.p.rapidapi.com/video'


const options = {
   
    params: {id: 'dQw4w9WgXcQ'},
    headers: {
      'X-RapidAPI-Key': process.env.
      REACT_APP_RAPID_API_KEY,
     
      'X-RapidAPI-Host': 
      'youtube-v3-alte rnative.p.rapidapi.com'
    }
  };

  export const FetchFromApi=async(url)=>{
    await.axios.get(`${BASE_URL}`)
  }