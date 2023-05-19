import { Button, Grid } from '@nextui-org/react';
import { GetStaticProps, NextPage } from 'next';
import { Layout } from '@/components/layouts';
//import  pokeApi from '../api/apiPokemon'
import { getAllPokemons } from '../api/pokemones/pokemonServices';  
//import axios from "axios";
import { pokeApi } from '@/api/pokemones';
//import PokemonCard from '@/components/pokemons/PokemonCard';

import { PokemonListResponse, SmallPokemon } from '@/interface';
import { PokemonCard }  from '@/components/pokemons';

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({pokemons}) => {

  

  console.log(pokemons)
  return (
    <><Layout title='Este es el título del Index del mundo de los pokemones'>
      <Button color="gradient">Lista de Pokemones: </Button>
      <Grid.Container gap={2}>
        { pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container> 
      
    
        


      </Layout>
    </>
  )
}




export const getStaticProps: GetStaticProps = async (context) => {

//const pokemones = await pokeApi; 
//const   { data } = await getAllPokemons('85');

const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

console.log(data.results)



const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
  ...pokemon,
  id: index +1,
  img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index +1}.svg`
}) );



//id = 1
//img = https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg


  return {
    props: {
      pokemons,
      
    }, // will be passed to the page component as props
  }
}

export default HomePage;