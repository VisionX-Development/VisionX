import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
  return <LandingPage>VisionX</LandingPage>;
};

const LandingPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ff0000;
  font-size: 12rem;
  letter-spacing: 2.5rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
`;

export default Home;
