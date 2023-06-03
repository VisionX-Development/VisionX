import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "next-auth/client";
import AlertBox from "../components/alert";
import CookieBanner from "../components/CookieBanner";
import Cookies from "universal-cookie";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
import { Modal } from "../components/modal/Modal";
import useToggle from "../utils/hooks/useToggle";
import { StoreProvider } from "easy-peasy";
import GlobalState from "../store/GlobalState";

function MyApp({ Component, pageProps }: AppProps) {
  const [showCookieBanner, setCookieBanner] = useState(false);

  const [modalContentObject, setModalContant] = useState({
    modalIsOpen: false,
    modalHeaderText: "",
    modalContent: <></>,
  });

  const { state } = useToggle(modalContentObject.modalIsOpen);

  const hideModal = () => {
    setModalContant({ ...modalContentObject, modalIsOpen: state });
  };

  const checkCookie = (): boolean => {
    const cookies = new Cookies();
    const hasCookie = cookies.get("VisionX_Privacy");
    return hasCookie;
  };

  useEffect(() => {
    !checkCookie() && !showCookieBanner && setCookieBanner(true);
  }, []);

  return (
    <Provider session={pageProps.session}>
      <StoreProvider store={GlobalState}>
        <NextUIProvider>
          <GlobalStyles>
            <Head>
              <title>VisionX</title>
            </Head>
            <Navbar />
            <Component {...pageProps} setModalContent={setModalContant} />
            <AlertBox />
            {showCookieBanner && (
              <CookieBanner setCookieBanner={setCookieBanner} />
            )}
            <Footer />
            <Modal
              isShown={modalContentObject.modalIsOpen}
              hide={hideModal}
              headerText={modalContentObject.modalHeaderText}
              modalContent={modalContentObject.modalContent}
            />
          </GlobalStyles>
        </NextUIProvider>
      </StoreProvider>
    </Provider>
  );
}

export default MyApp;
