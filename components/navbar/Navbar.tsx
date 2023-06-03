import React, { Component, ReactComponentElement } from "react";
import Image from "next/image";
import log_in_icon from "../../src/images/log_in.svg";
import log_out_icon from "../../src/images/log_out.svg";
import logo from "../../src/images/VisionX_Logo.svg";
import styled from "styled-components";
import { Modal } from "../modal/Modal";
import useToggle from "../../utils/hooks/useToggle";
import { LoginModal } from "../modal/LoginModal";
import { useSession } from "next-auth/client";
import { signOut } from "next-auth/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStoreActions } from "../../store/GlobalState";

const Navbar: React.FC<{}> = () => {
  const { state, toggle } = useToggle(false);

  const [session, loading] = useSession();

  const setUserState = useStoreActions((state) => state.user);

  const handleSignOut = async () => {
    setUserState.setIsLoggedIn(false);
    setUserState.setName("");
    setUserState.setRole("");
    setUserState.setEmail("");
    signOut({ redirect: true });
  };

  const router = useRouter();
  const thisPath: boolean = router.pathname === "/dashboard";

  return (
    <NavMain>
      <ImageWraper data-testid="logo">
        <Link href="/">
          <Image alt="logo" src={logo} layout="responsive" priority={true} />
        </Link>
      </ImageWraper>
      <MenueWrapper>
        <Link href="/ueber">ÜBER VISIONX</Link>
        {session && !thisPath && <Link href="/dashboard">DASHBOARD</Link>}
      </MenueWrapper>
      <ImageWraper>
        {session ? (
          <Image
            alt="log_out_icon"
            src={log_out_icon}
            layout="responsive"
            onClick={handleSignOut}
            priority={true}
          />
        ) : (
          <Image
            alt="log_in_icon"
            src={log_in_icon}
            layout="responsive"
            priority={true}
            data-testid="log_in_icon"
            onClick={toggle}
          />
        )}
      </ImageWraper>
      <Modal
        isShown={state}
        hide={toggle}
        headerText="Login"
        modalContent={<LoginModal toggle={toggle} />}
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
  z-index: 9;
  position: sticky;
  top: 0;
  background-color: rgba(51, 51, 51, 0.3);
  font-size: 1.8rem;
  width: 100vw;

  a {
    color: red;
    text-decoration: none;
    padding: 0.5rem;
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

const ImageWraper = styled.div`
  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.2));
  display: block;
  width: 50px;
  cursor: pointer;

  :hover {
    filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.6));
  }
`;

const MenueWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
  font-size: 1.5rem;
`;
