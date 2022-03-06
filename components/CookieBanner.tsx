import Link from "next/link";
import { useEffect } from "react";
import styled from "styled-components";
import { useStoreActions } from "../store/GlobalState";
import Cookies from "universal-cookie";

const CookieBanner = (): JSX.Element => {
  //const showCookieBanner = useStoreState((state) => state.showCookieBanner);
  const setCookieConsent = useStoreActions((state) => state.setCookieConsent);

  const setCookieBanner = useStoreActions((state) => state.setCookieBanner);

  const setCookie = () => {
    //set an Accept_Cookies_VisionX Cookie
    const cookies = new Cookies();
    cookies.set("Accept_Cookies_VisionX", true, {
      path: "/",
      maxAge: 15768000,
    });
  };

  const checkCookie = () => {
    const cookies = new Cookies();
    const hasCookie = cookies.get("Accept_Cookies_VisionX");
    return hasCookie;
  };

  const handleCookieAccept = () => {
    setCookie();
    setCookieBanner(false);
    setCookieConsent(true);
  };

  const handleCookieRejection = () => {
    setCookieBanner(false);
  };

  useEffect(() => {
    checkCookie() && setCookieBanner(false);
  });

  return (
    <CookieWrapper>
      <h1> Wir nutzen Cookies um die Darstellung zu verbessern.</h1>
      <div className="link">
        <Link href="/">Infos zum Datenschutz</Link>
      </div>
      <button onClick={handleCookieAccept}>OK</button>
      <button onClick={handleCookieRejection}>Ablehnen</button>
    </CookieWrapper>
  );
};

export default CookieBanner;

const CookieWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 10px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.8);
  background: rgba(24, 24, 24, 0.9);
  text-align: center;
  color: #ff0000;
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 1rem;
  z-index: 1;
  position: sticky;
  bottom: 0;
  font-size: 1.5rem;
  letter-spacing: 0.5rem;

  button {
    border: 1px solid #ff0000;
    border-radius: 10px;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.6);
    background: rgba(95, 95, 95, 0.3);
    color: rgb(255, 0, 0);
    font-size: 2rem;
    font-family: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    outline: none;
    font-weight: bold;
  }

  .link {
    font-size: 1.5rem;
  }

  button :hover {
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1);
    background: rgba(95, 95, 95, 0.6);
    cursor: pointer;
  }

  // phone
  @media (max-width: 600px) {
    font-size: 2rem;

    button {
      font-size: 3rem;
      margin: 0.5rem;
    }
    .link {
      font-size: 2.5rem;
    }
  }
  // tablet portrait
  @media (max-width: 900px) {
  }
  // tablet landscape
  @media (max-width: 1200px) {
  }
  // desktop
  @media (max-width: 1800px) {
  }
  // >1800px = wide screen
`;
