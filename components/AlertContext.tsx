import React, { useState, createContext, Children } from "react";

interface AlertContextTypes {
  alertState: {
    isShown: boolean;
    message: string;
    type: string;
  };
  setAlertState: React.Dispatch<
    React.SetStateAction<{
      isShown: boolean;
      message: string;
      type: string;
    }>
  >;
}

export const AlertContext = createContext({} as AlertContextTypes);

export const AlertProvider = () => {
  const [alertState, setAlertState] = useState({
    isShown: false,
    message: "",
    type: "",
  });

  return (
    <AlertContext.Provider
      value={{
        alertState,
        setAlertState,
      }}
    ></AlertContext.Provider>
  );
};

export const SettingsConsumer = AlertContext.Consumer;

export default AlertContext;
