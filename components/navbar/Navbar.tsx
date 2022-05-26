import React, { Component, ReactComponentElement } from "react";
import Image from "next/image";
import log_in_icon from "../../src/images/log_in.svg";
import logo from "../../src/images/VisionX_Logo.svg";
import styled from "styled-components";
import { Modal } from "../modal/Modal";
import { useModal } from "../../utils/hooks/useModal";
import { LoginModal } from "./LoginModal";

const Navbar = () => {
  const { isShown, toggle } = useModal();
  const onConfirm = () => toggle();
  const onCancel = () => toggle();
  return (
    <NavMain>
      <ImageWraper data-testid="logo">
        <Image alt="logo" src={logo} layout="responsive" />
      </ImageWraper>
      <ImageWraper data-testid="log_in_icon" onClick={toggle}>
        <Image alt="log_in_icon" src={log_in_icon} layout="responsive" />
      </ImageWraper>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText="Login"
        modalContent={<LoginModal onConfirm={onConfirm} onCancel={onCancel} />}
      />
    </NavMain>
  );
};

export default Navbar;

const NavMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem 0.7rem 2rem;
  z-index: 1;
  position: sticky;
  top: 0;
  background-color: rgba(51, 51, 51, 0.6);
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
  font-size: 2rem;

  // phone
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
    padding: 1vw 15vw 1vw 15vw;
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
  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.2));
  display: block;
  width: 50px;
  cursor: pointer;

  :hover {
    filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.8));
  }
`;
