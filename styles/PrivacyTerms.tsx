import styled from "styled-components";

const TermsMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  background-color: rgba(210, 210, 210, 1);
  color: black;
  min-height: 100vh;

  :hover {
    filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.2));
  }

  // phone
  @media (max-width: 600px) {
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

const MainText = styled.div`
  padding: 2rem 10rem 2rem 10rem;

  p {
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }

  .bold {
    font-weight: bold;
  }

  // phone
  @media (max-width: 600px) {
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

export { MainText, TermsMain };
