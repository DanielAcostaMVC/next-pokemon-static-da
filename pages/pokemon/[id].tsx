import { useEffect, useState } from "react";
import { Layout } from "@/components/layouts";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { Grid, Card, Text, Button, Container, Image } from "@nextui-org/react";
import { pokeApi } from "@/api/pokemones";
import { localFavorites } from "@/utils";
import { PokemonFullResponse } from "@/interface";
import confetti from "canvas-confetti";
import { getPokemonInfo } from "@/utils/getPokemonInfo";

interface Props {
  pokemon: PokemonFullResponse;
}

const Pokemon: NextPage<Props> = ({ pokemon }) => {
  /*const router: useRouter();
    console.log(router.query);*/

  const [isInFavorites, setIsInFavorites] = useState(false);

  const onToggleFavorite = () => {
    /*console.log('ID:', pokemon.id);
        localStorage.setItem('favorites', `${pokemon.id}`);*/
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (!isInFavorites) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 0.4,
          y: 0.2,
        },
      });
    }

    //console.log('hey')
  };

  useEffect(() => {
    localFavorites.existInFavorites(pokemon.id);
    console.log("buenas...");
    console.log(localFavorites.existInFavorites(pokemon.id));
    setIsInFavorites(localFavorites.existInFavorites(pokemon.id));
  }, [pokemon.id]);

  //localFavorites.existInFavorites( pokemon.id )

  console.log(pokemon.abilities.length);

  return (
    <>
      <Layout title={pokemon.name}>
        <Text h2 css={{ pl: "50px" }}>
          # {pokemon.id}-poke pesa {pokemon.height} kilo(s), tiene{" "}
          {pokemon.abilities.length} habilidad(es) y su nombre es...
        </Text>
        <Grid.Container
          css={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: "5px",
          }}
          gap={2}
        >
          <Grid xs={6} sm={6} md={6} xl={6}>
            <Card isHoverable css={{ p: "30px" }}>
              <Card.Header
                css={{ display: "flex", justifyContent: "space-between" }}
              >
                <Text h1 transform="capitalize">
                  {" "}
                  {pokemon.name}
                </Text>
              </Card.Header>
              <Card.Body>
                <Card.Image
                  src={
                    pokemon.sprites.other?.dream_world.front_default ||
                    "/no-image.png"
                  }
                  alt="alguna imagen de pokemon"
                />
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={4} sm={4} md={4} xl={4}>
            <Card>
              <Card.Body>
                <Text size={30}>Sprites:</Text>
                <Container>
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.back_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                </Container>
              </Card.Body>
              <Card.Footer
                css={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button
                  onPress={onToggleFavorite}
                  color="gradient"
                  ghost={!isInFavorites}
                >
                  {" "}
                  {isInFavorites ? "En Favoritos" : "Guardar en favoritos"}{" "}
                </Button>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  //const {data} = await //

  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  //const { data } = await pokeApi.get<PokemonFullResponse>(`/pokemon/${id}`);

  const pokemon = await getPokemonInfo ( id );

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
};

export default Pokemon;
