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
      VisionX
      <LandingSub>Webentwicklung</LandingSub>
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
  font-size: 6rem;
  letter-spacing: 2.5rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
`;

const LandingSub = styled.div`
  color: #ff0000;
  font-size: 2rem;
  letter-spacing: 1.5rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
  margin: 2rem;

  // phone
  @media (max-width: 600px) {
    font-size: 6rem;
    letter-spacing: 1rem;
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

const ImageWraper = styled.div`
  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 1));
`;

export default Home;
