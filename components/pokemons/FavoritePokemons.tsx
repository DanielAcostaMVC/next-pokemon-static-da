import { Card, Grid, Text } from "@nextui-org/react";
import React from "react";
import { FC } from "react";
import { FavoriteCardPokemon } from "./";

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  let gridFavoritos: JSX.Element[] = pokemons.map((id) => (
    <FavoriteCardPokemon key={id} pokemonId={id} />
  ));

  return (
    <>
    <Grid.Container gap={2} css={{ display: "flex", flexDirection: "row" }}>
      {gridFavoritos}
    </Grid.Container>
    </>
  );
};

