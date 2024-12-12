import styled from "styled-components";
import { Spacer, Button } from "@nextui-org/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Image from "next/image";
import spinner from "../../src/images/spinner.svg";
import { changeUserData } from "../../utils/api/user";
import { useStoreState, useStoreActions } from "../../store/GlobalState";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { set } from "mongoose";

interface MyFormValues {
  new_name: string;
  new_email: string;
}

const UserUpdateSchema = Yup.object().shape({
  new_email: Yup.string().email(
    "Email ist ungültig. Bitte korrekte Email eingeben."
  ),
});

const clickOnCloseButton = () => {
  const modalCloseButton = document.getElementById("modal_close_button");
  modalCloseButton?.click();
};

export const UserUpdateModal: React.FC = () => {
  const initialValues: MyFormValues = {
    new_name: "",
    new_email: "",
  };

  const setAlertState = useStoreActions((state: any) => state.setAlert);

  const { userName, userEmail } = useStoreState((state: any) => state.user);

  const setUserState = useStoreActions((state) => state.user);

  const [isLoading, setLoading] = useState(false);

  const { data: session, status, update } = useSession();

  if (status !== "authenticated") return null;

  const handUpdateUser = async (new_name: string, new_email: string) => {
    try {
      setLoading(true);
      if (new_name === "" && new_email === "") {
        throw new Error(
          "Bitte fülle mindestens ein Feld aus oder wähle Abbrechen."
        );
      }

      if (new_name === "") {
        new_name = userName;
      }
      if (new_email === "") {
        new_email = userEmail;
      }

      const result = await changeUserData(new_name, new_email);

      setAlertState(result);

      if (result.type === "success") {
        clickOnCloseButton();
        setUserState.setName(new_name);
        setUserState.setEmail(new_email);
      }

      setLoading(false);
    } catch (error: any) {
      setAlertState({ message: error.message, type: "warning" });
      setLoading(false);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UserUpdateSchema}
      onSubmit={(values, actions) => {
        handUpdateUser(values.new_name, values.new_email);
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <FormWrapper>
          {isLoading ? (
            <Image
              alt="spinner"
              src={spinner}
              layout="responsive"
              priority={true}
              className="spinner"
            />
          ) : (
            <Form>
              <label htmlFor="neuer name">Neuer Name</label>
              <Field
                id="new_name"
                name="new_name"
                placeholder={userName}
                size="xl"
                fullWidth={true}
                autoFocus={true}
              />
              <ErrorMessage
                name="new_name"
                component="div"
                className="error-message"
              />
              <Spacer />
              <label htmlFor="neue email">Neue E-Mail</label>
              <Field
                id="new_email"
                name="new_email"
                placeholder={userEmail}
                size="xl"
                fullWidth={true}
              />
              <ErrorMessage
                name="new_email"
                component="div"
                className="error-message"
              />
              <Spacer />
              <Spacer />
              <Button
                type="submit"
                size="xl"
                css={{ width: "100%", fontSize: "2rem" }}
              >
                Benutzer Daten speichern
              </Button>
              <Spacer />
              <Button
                onPressStart={clickOnCloseButton}
                size="xl"
                css={{ width: "100%", fontSize: "2rem" }}
              >
                Abbrechen
              </Button>
            </Form>
          )}
        </FormWrapper>
      )}
    </Formik>
  );
};

const FormWrapper = styled.div`
  width: 40vw;
  padding: 30px;
  font-size: 1.5rem;
  caret-color: black;

  input,
  select {
    width: 100%;
    border-radius: 5px;
    padding: 7px;
    color: black;
    font-size: 1.5rem;
  }

  .error-message {
    color: red;
    font-size: 1.5rem;
  }

  .spinner {
    position: fixed !important;
    min-width: 40% !important;
    min-height: 40% !important;
    max-width: 40% !important;
    max-height: 40% !important;
  }
`;
