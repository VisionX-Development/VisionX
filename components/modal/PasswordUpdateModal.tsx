import styled from "styled-components";
import { Spacer, Button } from "@nextui-org/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { string, ref } from "yup";
import { useState } from "react";
import Image from "next/image";
import spinner from "../../src/images/spinner.svg";
import { changeUserData } from "../../utils/api/user";
import { useStoreState, useStoreActions } from "../../store/GlobalState";

interface MyFormValues {
  new_name: string;
  new_email: string;
  new_password: string;
  old_password: string;
}

const UserUpdateSchema = Yup.object().shape({
  new_password_1: Yup.string().matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/,
    "Muss mindestens 5 Ziffern enthalten, ein Großbuchstabe, ein Kleinbuchstabe und ein Sonderzeichen."
  ),
  new_password_2: string().oneOf(
    [ref("new_password_1")],
    "Passwörter stimmen nicht überein."
  ),
  new_email: Yup.string().email(
    "Email ist ungültig. Bitte korrekte Email eingeben."
  ),
});

export const UserUpdateModal: React.FC = () => {
  const initialValues: MyFormValues = {
    new_name: "",
    new_email: "",
    new_password: "",
    old_password: "",
  };

  const setAlertState = useStoreActions((state: any) => state.setAlert);

  const { userName, userEmail } = useStoreState((state: any) => state.user);

  const [isLoading, setLoading] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const handUpdateUser = async (
    new_name: string,
    new_email: string,
    old_password: string,
    new_password: string
  ) => {
    try {
      setLoading(true);
      const result = await changeUserData(new_email, old_password);
      result && setLoading(false);
      setAlertState(result);
    } catch (error: any) {
      setAlertState({ message: error.message, type: "warning" });
      setLoading(false);
    }

    const handleChangePassworde = (value: string) => {
      value !== "" && setChangePassword(true);
    };
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UserUpdateSchema}
      onSubmit={(values, actions) => {
        handUpdateUser(
          values.new_name,
          values.new_email,
          values.new_password,
          values.old_password
        );
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
              <label htmlFor="new password">Neues Passwort</label>
              <Field
                id="new_password_1"
                label="Neues Passwort"
                name="new_password_1"
                type="password"
                placeholder=""
                size="xl"
                fullWidth={true}
              />
              <ErrorMessage
                name="new_password_1"
                component="div"
                className="error-message"
              />

              <label htmlFor="new password">Neues Passwort wiederholen</label>
              <Field
                id="new_password_2"
                label="Passwort Wiederholung"
                name="new_password_2"
                type="password"
                placeholder=""
                size="xl"
                fullWidth={true}
              />
              <ErrorMessage
                name="new_password_2"
                component="div"
                className="error-message"
              />
              <Spacer />
              <label htmlFor="old password">Altes Passwort</label>
              <Field
                id="old_password"
                label="Altes Passwort"
                name="old_password"
                type="old_password"
                placeholder=""
                size="xl"
                fullWidth={true}
              />
              <Spacer />
              <ErrorMessage
                name="old_password"
                component="div"
                className="error-message"
              />

              <Spacer />

              <Button
                type="submit"
                size="xl"
                css={{ width: "100%", fontSize: "2rem" }}
              >
                Benutzer Daten speichern
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
