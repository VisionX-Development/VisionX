import { useState } from "react";

// export interface ErrorStateInterface {
//   error: object;
//   error_message: string | null;
// }

function useAuthState() {
  const initialVal = {
    error: {},
    error_message: null,
  };
  const [ErrorState, setErrorState] = useState(initialVal);

  return [ErrorState, setErrorState];
}
export default useAuthState;
