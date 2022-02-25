import React, { createContext } from "react";
import useAuthState from "./state_hooks/useAuthState";
import useErrorState from "./state_hooks/useErrorState";

const GlobalAppContext = createContext(null);

const GlobalState = (props: React.ReactNode) => {
  const [AuthState, setAuthState] = useAuthState();
  const [ErrorState, setErrorState] = useErrorState();

  return (
    <GlobalAppContext.Provider
      value={(AuthState, setAuthState, ErrorState, setErrorState)}
    >
      {props.children}
    </GlobalAppContext.Provider>
  );
};

export default GlobalState;

// Consume in your app

// export const PostInfo = () => {
//   const appContext = React.useContext(AppCtx);
//   return (
//     <div>
//       Name: {appContext.name}, Author: {appContext.author}, Url:{" "}
//       {appContext.url}
//     </div>
//   );
// };
