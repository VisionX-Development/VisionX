import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import Head from "next/head";
import { StoreProvider } from "easy-peasy";
import GlobalState from "../store/GlobalState";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStyles>
      <Head>
        <title>VisionX - Webdevelopment</title>
        <meta name="Home of VisionX" content="Home of VisionX" />
        <style>
          @import
          url(https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap);
        </style>
      </Head>
      <StoreProvider store={GlobalState}>
        <Component {...pageProps} />
      </StoreProvider>
    </GlobalStyles>
  );
}

export default MyApp;
