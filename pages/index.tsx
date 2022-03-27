import type { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../src/images/VisionX_Logo.svg";
import CookieBanner from "../components/CookieBanner";
import { useStoreState } from "../store/GlobalState";

const Home: NextPage = () => {
  const showCookieBanner = useStoreState((state) => state.showCookieBanner);

  return (
    <LandingPage>
      <ImageWraper>
        <Image alt="Logo" src={Logo} width={500} height={500} />
      </ImageWraper>
      <div className="titel">VisionX</div>
      <div className="subtitel">Webentwicklung</div>
      {showCookieBanner && <CookieBanner />}
    </LandingPage>
  );
};

const LandingPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ff0000;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);

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
