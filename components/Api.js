import axios from 'axios';

const api = axios.create({
    baseURL: 'http://www.omdbapi.com/?t=guardians+of+the+galaxy&apikey=720d3c5a'
});

export default api;