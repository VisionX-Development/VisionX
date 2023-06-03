import type { NextPage } from "next";
import { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../src/images/VisionX_Logo.svg";

const Index: NextPage = () => {
  return (
    <LandingPage>
      <ImageWraper>
        <Image alt="Logo" src={Logo} width={500} height={500} priority={true} />
      </ImageWraper>

      <p className="title">
        <strong className="capital">V</strong>ision
        <strong className="capital">X</strong>
      </p>
    </LandingPage>
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

  .title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 8vmax;
    letter-spacing: 2.5rem;
    font-family: inherit;
  }

  .capital {
    font-size: 8vmax;
    font-weight: bold;
  }

  // phone
  @media (max-width: 350px) {
    .title {
      writing-mode: vertical-rl;
      text-orientation: upright;
      font-size: 5vmax;
      letter-spacing: 0rem;
    }
  }
`;

const ImageWraper = styled.div`
  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 1));
`;

export default Index;
