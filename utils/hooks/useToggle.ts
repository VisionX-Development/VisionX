import { useState } from "react";

interface Toggle {
  state: boolean;
  toggle: () => void;
}

function useToggle(initialVal: boolean = false): Toggle {
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };
  return { state, toggle };
}
export default useToggle;
