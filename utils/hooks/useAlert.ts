import { useContext } from "react";
import AlertContext from "../../components/AlertContext";

export default () => {
  const alertContext = useContext(AlertContext);

  return alertContext;
};
