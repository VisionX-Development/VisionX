import type { NextPage } from "next";
import styled from "styled-components";
import { TermsMain } from "../styles/PrivacyTerms";
import Image from "next/image";
import Logo from "../src/images/VisionX_Logo.svg";

const Ueber: NextPage = () => {
  return (
    <TermsMain style={{ justifyContent: "flex-start" }}>
      <Image alt="Logo" src={Logo} width={250} height={250} priority={true} />
      <h1>
        <strong style={{ color: "red" }}>VISIONX.DEV</strong>ELOPMENT
      </h1>
      <h2>Webentwicklung</h2>
      <br />
      <p style={{ fontSize: "2rem" }}>
        <span style={{ visibility: "hidden" }} aria-hidden="true">
          PLEASE GO AWAY!
        </span>
        <br />
        Kontakt: info{/*afdasdf*/}@{/*sdfjsdhfkjypcs*/}visionx.dev
      </p>
    </TermsMain>
  );
};

export default Ueber;
