import styled from "styled-components";

const TermsMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  background-color: rgba(210, 210, 210, 1);
  color: black;
  padding: 2rem 10rem 2rem 10rem;
  min-height: 100vh;

  :hover {
    filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.2));
  }

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

export { TermsMain };
