import axios from 'axios';

const instanceApi = axios.create({
   baseURL: 'https://pokeapi.co/api/v2/pokemon',
   timeout: 1000,
   headers: {'X-Custom-Header' : 'foobar'}
}) 
