import axios from "axios";

const BASE_URL ='https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
      relatedToVideoId: '7ghhRHRP6t4',
      part: 'id,snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_YOUTUBE_KEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };

 export const fetchFromAPI = async(url) =>{
    let {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data
    
  }