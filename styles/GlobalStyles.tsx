import * as styled from "styled-components";

export const GlobalStyle = styled.createGlobalStyle`
  html,
  body {
    height: 100vh;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-image: linear-gradient(
      150deg,
      rgb(24, 24, 24) 20%,
      rgb(68, 68, 68) 100%
    );
    background-repeat: no-repeat;
    font-family: "Play";
    color: #ff0000;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 1vmax;
    z-index: -1;
  }

  /* hides all scrollbars */
  .displayNone,
  ::-webkit-scrollbar {
    display: none !important;
  }

  hr {
    border: 0;
    margin: 1rem 0 0 0;
    height: 2px;
    background-image: linear-gradient(
      to right,
      rgba(255, 0, 0, 0),
      red,
      rgba(255, 0, 0, 0)
    );
  }

  /* phone */
  @media (max-width: 600px) {
  }
  /* tablet portrait */
  @media (max-width: 900px) {
  }
  /* tablet landscape */
  @media (max-width: 1200px) {
  }
  /* desktop */
  @media (max-width: 1800px) {
  }
  /* >1800px = wide screen */
`;

const BasicLayout = ({ children }: { children: unknown }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BasicLayout;
