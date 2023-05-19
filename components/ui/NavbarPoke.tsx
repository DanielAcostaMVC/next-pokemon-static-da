import React from "react";

import NextLink from "next/link";
import { Navbar, Text, Image, Link } from "@nextui-org/react";

export const NavbarPoke = () => {
  return (
    <Navbar variant="sticky">
      <Navbar.Brand>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="imagen pokemon"
        ></Image>
        <NextLink href="/" passHref legacyBehavior>
          <Link>
            <Text color="white" h2 hideIn="xs">
              P
            </Text>
            <Text color="white" h3 hideIn="xs">
              ókemon
            </Text>
          </Link>
        </NextLink>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <NextLink href="/pokemon/25" passHref legacyBehavior>
          <Navbar.Link href="#">Juguetón</Navbar.Link>
        </NextLink>

        <Navbar.Link href="/pokemon/11">Aburrido</Navbar.Link>

        <NextLink href="/pokemon/13" passHref legacyBehavior>
          <Navbar.Link href="#" isActive>
            Soñador
          </Navbar.Link>
        </NextLink>
        <NextLink href="/pokemon/35" passHref legacyBehavior>
          <Navbar.Link href="#">Nerd</Navbar.Link>
        </NextLink>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Link href="/favorites">
            <Text color="white">Favoritos</Text>
          </Link>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};
