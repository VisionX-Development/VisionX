import { useState } from "react";

// export interface AuthStateInterface {
//   token: string | null;
//   isAuthenticated: boolean;
//   loadingAuth: boolean;
//   user: {
//     _id: number | null;
//   };
// }

function useAuthState() {
  const initialVal = {
    token: null,
    isAuthenticated: false,
    loadingAuth: false,
    user: {
      _id: null,
    },
  };

  const [AuthState, setAuthState] = useState(initialVal);

  return [AuthState, setAuthState];
}
export default useAuthState;
