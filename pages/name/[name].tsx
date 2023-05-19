import { pokeApi } from "@/api/pokemones";
import Pokemon from "@/components/pokemons/Pokemon";
import { PokemonFullResponse, PokemonListResponse } from "@/interface";
import { getPokemonInfo } from "@/utils/getPokemonInfo";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC } from "react";

interface Props {
  pokemon: PokemonFullResponse;
}

const PokemonByNamePage: FC<Props> = ({ pokemon }) => {
  return <>
  <div>mi nombre es {pokemon.name}</div>
  <Pokemon pokemon={pokemon} />
  </>
  ;
};



export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  console.log(data.results);

  const pokemons = data.results.map((pokemon, index) => ({
    params: {
      name: pokemon.name,
    },
    //    ...pokemon,
    //id: index +1,
    //img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index +1}.svg`
  }));

  console.log(pokemons);

  return {
    paths: pokemons,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  //const { data } = await pokeApi.get<PokemonFullResponse>(`/pokemon/${name}`);
  const pokemon = await getPokemonInfo ( name );

  if ( !pokemon ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      //pokemon: data,
      pokemon,
    },
    revalidate: 3600,
  };

  /*return {
    props: {
      pokemon: data,
    },
  };*/
};

export default PokemonByNamePage;
