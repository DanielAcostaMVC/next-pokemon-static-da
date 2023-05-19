import pokeApi from "./apiPokemon"

export const getAllPokemons = async (limit: string = '151') => {
    //const pokemones = await pokeApi; 
    const resPokeApi = await pokeApi.get(`/pokemon?limit=${limit}`)
}

