import { FC, PropsWithChildren } from "react";

import Head from "next/head";

import { NavbarPoke } from "../ui";

type PropsLayout = PropsWithChildren & {
  title?: string;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<PropsLayout> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{title || "PokemonApp"}</title>
        <meta name="authors" content="Daniel Acosta" />
        <meta name="descriptions" content={`info poke ${title}`} />
        <meta name="keywords" content={`${title} Pokemon, next`} />
        <meta property="og:title" content={`info poke ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/banner.png`} />
      </Head>
      <NavbarPoke />
      <main>{children}</main>
    </>
  );
};
