import type { NextPage } from "next";
import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { TermsMain, MainText } from "../styles/PrivacyTerms";
import Image from "next/image";
import Logo from "../src/images/VisionX_Logo.svg";

const Ueber: NextPage = (props: any) => {
  return (
    <TermsMain>
      <Navbar />
      <MainText>
        <Image alt="Logo" src={Logo} width={100} height={100} priority={true} />
        <h1>
          <strong style={{ color: "red" }}>VISIONX.DEV</strong>ELOPMENT
        </h1>
        <h2>Webentwicklung aus einer Hand</h2>
        <p>
          <br />
          <strong>VISIONX.DEV</strong> entwickelt Web-Projekte und
          Web-Applikationen professionell und aus einer Hand. Von der Planung,
          der Auswahl der geeigneten Mittel über die Programmierung bis zur
          Grafik und Design. Dies fördert die Nachhaltigkeit und reduziert
          Kosten. Dabei wird auf die neuesten Technologien und Standards
          gesetzt, um die bestmögliche Qualität zu gewährleisten.{" "}
          <strong>VISIONX.DEV</strong> setzt dabei bei jedem Schritt auf eine
          enge Kommunikation und Zusammenarbeit mit dem Anwender.
          <br />
          <br />
          Kontakt: info(@)visionx.dev
        </p>
      </MainText>
      <Footer />
    </TermsMain>
  );
};

const UeberWrapper = styled.div``;

export default Ueber;
