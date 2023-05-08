import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Footer: React.FC<{}> = () => {
  return (
    <FooterMain>
      <Link href="/datenschutz">Datenschutz</Link>
      <Link href="/nutzungsbedingungen">Nutzungsbedingungen</Link>
      <Link href="/nutzungsbedingungen">Impressum</Link>
    </FooterMain>
  );
};

export default Footer;

const FooterMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0.7rem 2rem 0.7rem 2rem;
  z-index: 1;
  background-color: rgba(51, 51, 51, 0.3);
  font-size: 1.2rem;
  cursor: pointer;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 100vw;

  a {
    color: rgba(255, 0, 0, 1);
    text-decoration: none;
    :hover {
      filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.6));
    }
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
