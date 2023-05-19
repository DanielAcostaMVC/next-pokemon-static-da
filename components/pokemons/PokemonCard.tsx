import { Grid, Card, Text, Row } from "@nextui-org/react";
import { SmallPokemon } from "@/interface";
import { FC } from "react";
import { useRouter } from "next/router";

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard:FC<Props> = ({ pokemon }) => {

  const router = useRouter();

  const onClick = () => {
      router.push(`/name/${pokemon.name}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} >
      <Card onClick={onClick} isHoverable isPressable>
        <Card.Body>
          <Card.Image
            src={pokemon.img}
            width="100%"
            height={140}
            alt={pokemon.name}
          />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }}>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text b transform="capitalize">{pokemon.name}</Text>
            <Text
              
            >
             # {pokemon.id}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
}

