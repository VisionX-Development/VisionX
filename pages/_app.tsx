import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import Head from "next/head";
import { StoreProvider } from "easy-peasy";
import GlobalState from "../store/GlobalState";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <GlobalStyles>
        <Head>
          <title>VisionX - Webdevelopment</title>
        </Head>
        <StoreProvider store={GlobalState}>
          <Component {...pageProps} />
        </StoreProvider>
      </GlobalStyles>
    </NextUIProvider>
  );
}

export default MyApp;
