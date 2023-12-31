import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/guide/ThirdwebGuideFooter";
import "../styles/globals.css";
import { AppProps } from "next/app";

// This is the chain your dApp will work on.
const activeChain = "polygon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain} clientId="315d0c4add7d6d75bfbd0354ebcfd132">
      <Head>
        <title>Morkie Airdrop 🔥</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Claim Morkie Airdrop"
        />
        <meta
          name="keywords"
          content="Airdrop, Morkie NFT, Morkie Token, ZetaChain, Taiko"
        />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
