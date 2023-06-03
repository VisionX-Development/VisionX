import styled from "styled-components";
import Image from "next/image";
import close_icon from "../src/images/close_black.svg";
import { useStoreState, useStoreActions } from "../store/GlobalState";
import { useEffect } from "react";

const AlertBox = (): JSX.Element => {
  const alertState = useStoreState((state) => state.alert);
  const setAlertState = useStoreActions((state) => state.setAlert);

  const closeBox = () => {
    setAlertState({ message: "no alert", type: "none" });
  };

  useEffect(() => {
    if (alertState.type !== "none") {
      setTimeout(() => {
        setAlertState({ message: "no alert", type: "none" });
      }, 5000);
    }
  }, [alertState]);

  const setAlertBoxColor = (alertType: string) => {
    switch (alertType) {
      case "warning":
        return "var(--alert-color-warning)";
      case "message":
        return "var(--alert-color-message)";
      case "success":
        return "var(--alert-color-success)";
      case "none":
        return "var(--alert-color-message)";
      default:
        return "var(--alert-color-message)";
    }
  };

  const setAlertTextColor = (alertType: string) => {
    switch (alertType) {
      case "warning":
        return "var(--alert-text-warning)";
      case "message":
        return "var(--alert-text-message)";
      case "success":
        return "var(--alert-text-success)";
      case "none":
        return "var(--alert-text-message)";
      default:
        return "var(--alert-text-message)";
    }
  };
  if (alertState.type !== "none")
    return (
      <AlertWrapper
        style={{
          backgroundColor: setAlertBoxColor(alertState.type),
          color: setAlertTextColor(alertState.type),
        }}
      >
        <h1 data-testid="alert message"> {alertState.message}</h1>
        <CancleIcon onClick={closeBox}>
          <Image alt="close icon" src={close_icon} layout="responsive" />
        </CancleIcon>
      </AlertWrapper>
    );
  else {
    return <></>;
  }
};

const AlertWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: line;
  justify-content: space-evenly;
  border-radius: 10px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.8);
  text-align: center;
  color: #ff0000;
  text-decoration: none;
  font-size: 1rem;
  z-index: 1;
  position: fixed;
  bottom: 0;
  letter-spacing: 0.2rem;
  width: 100vw;
  font-size: 1.2vmax;
  text-shadow: none;
  z-index: 501;
`;

const CancleIcon = styled.div`
  width: 4rem;
  height: 4rem;
  color: #ff0000;

  :hover {
    cursor: pointer;
  }
`;

export default AlertBox;
