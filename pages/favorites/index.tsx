import { Layout } from "@/components/layouts";
import { FavoritePokemons }  from "@/components/pokemons";
import { NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const Favoritos = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  console.log("favoritos=>", [favoritePokemons]);
/*
  let gridFavoritos: JSX.Element[] = favoritePokemons.map((id) => (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  ));
*/
  return (
    <Layout title="pokemones favorities ♥">
      <Text h2 css={{ pl: "50px" }}>
        Favoritos ♠
      </Text>
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default Favoritos;
