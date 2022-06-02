import type { NextPage } from "next";
import { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../src/images/VisionX_Logo.svg";
import Navbar from "../components/navbar/Navbar";
import CookieBanner from "../components/CookieBanner";
import { useStoreState, useStoreActions } from "../store/GlobalState";
import Cookies from "universal-cookie";

const Home: NextPage = () => {
  const showCookieBanner = useStoreState((state) => state.showCookieBanner);
  const setCookieBanner = useStoreActions((state) => state.setCookieBanner);

  const checkCookie = (): boolean => {
    const cookies = new Cookies();
    const hasCookie = cookies.get("VisionX_Privacy_Policy");
    return hasCookie;
  };

  useEffect(() => {
    !checkCookie() && !showCookieBanner && setCookieBanner(true);
  }, []);

  return (
    <>
      <LandingPage>
        <Navbar />
        <ImageWraper>
          <Image alt="Logo" src={Logo} width={500} height={500} />
        </ImageWraper>
        <div className="titel">VisionX</div>
        <div className="subtitel">Webentwicklung</div>
        {showCookieBanner && <CookieBanner />}
      </LandingPage>
    </>
  );
};

const LandingPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #ff0000;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
  overflow: scroll;

  @media screen and (min-width: 100vh) {
    /* The width is greater than the height */
  }

  .titel {
    font-size: 8vmax;
    letter-spacing: 2.5rem;
  }

  .subtitel {
    font-size: 4vmax;
    letter-spacing: 1rem;
    margin: 2rem;
  }

  // phone
  @media (max-width: 600px) {
    .titel {
      font-size: 7vmax;
      letter-spacing: 2.5rem;
    }

    .subtitel {
      font-size: 3vmax;
      letter-spacing: 1.2rem;
      margin: 2rem;
    }
  }

  // tablet portrait
  @media (min-width: 601px) and (max-width: 900px) {
    .titel {
      font-size: 12vmax;
      letter-spacing: 2.5rem;
    }

    .subtitel {
      font-size: 5vmax;
      letter-spacing: 1.3rem;
      margin: 2rem;
    }
  }

  // tablet landscape
  @media (min-width: 1200px) {
  }
  // desktop
  @media (max-width: 1800px) {
  }
  // >1800px = wide screen
`;

const ImageWraper = styled.div`
  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 1));
`;

export default Home;
