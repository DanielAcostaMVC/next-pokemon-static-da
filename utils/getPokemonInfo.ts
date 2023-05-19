import { pokeApi } from "@/api/pokemones";
import { PokemonFullResponse } from "@/interface";

export const getPokemonInfo = async ( nameOrId : string ) => {

    try {

        const { data } = await pokeApi.get<PokemonFullResponse>(`/pokemon/${ nameOrId }`);

        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites,
            height: data.height,
            abilities: data.abilities
        }

    } catch (error){
        return null;
    }

    

}