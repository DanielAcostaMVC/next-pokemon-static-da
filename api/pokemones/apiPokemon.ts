

import axios from "axios";


//'https://pokeapi.co/api/v2/pokemon?limit=151'
const pokeApi = axios.create({
    baseURL : 'https://pokeapi.co/api/v2',
})

export default pokeApi;
