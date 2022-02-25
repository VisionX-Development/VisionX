import type { AppProps } from "next/app";
import GlobalState from "../components/context/GlobalContext";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalState>
      <GlobalStyles>
        <Component {...pageProps} />
      </GlobalStyles>
    </GlobalState>
  );
}

export default MyApp;
