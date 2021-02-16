import axios from 'axios';

const fetchShow = (setShow, setSeasons) => {
   return axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
        return { show : res.data, seasons: res.data._embedded.episodes } 
      });
  };

export default fetchShow; 