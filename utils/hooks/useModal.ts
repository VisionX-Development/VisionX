import { ReactElement } from "react";

const useModal = (headerText: string, modalComponent: ReactElement) => {
  return {
    modalIsOpen: true,
    modalHeaderText: headerText,
    modalContent: modalComponent,
  };
};

export default useModal;
