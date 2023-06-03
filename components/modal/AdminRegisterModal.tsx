import styled from "styled-components";
import { Spacer, Button } from "@nextui-org/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Image from "next/image";
import spinner from "../../src/images/spinner.svg";
import { createAdminUser } from "../../utils/auth/auth";
import { useStoreState, useStoreActions } from "../../store/GlobalState";

interface MyFormValues {
  name: string;
  email: string;
  password: string;
  role: string;
  app: string;
  database: string;
}

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Bitte geben Sie einen Namen ein."),
  password: Yup.string()
    .required("Bitte geben Sie ein Passwort ein.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/,
      "Muss mindestens 5 Ziffern enthalten, ein Großbuchstabe, ein Kleinbuchstabe und ein Sonderzeichen."
    ),
  email: Yup.string()
    .email("Email ist ungültig. Bitte korrekte Email eingeben.")
    .required("Bitte geben Sie eine Email ein."),
});

export const AdminRegisterModal: React.FC = () => {
  const initialValues: MyFormValues = {
    name: "",
    email: "",
    password: "",
    role: "user",
    app: "visionx",
    database: "development",
  };

  const setAlertState = useStoreActions((state: any) => state.setAlert);

  const [isLoading, setLoading] = useState(false);

  const handleCreateUser = async (
    name: string,
    email: string,
    password: string,
    role: string,
    app: string,
    database: string
  ) => {
    try {
      setLoading(true);
      const result = await createAdminUser(
        name,
        email,
        password,
        role,
        app,
        database
      );
      result && setLoading(false);
      setAlertState(result);
    } catch (error: any) {
      setAlertState({ message: error.message, type: "warning" });
      setLoading(false);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={(values, actions) => {
        handleCreateUser(
          values.name,
          values.email,
          values.password,
          values.role,
          values.app,
          values.database
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
              <Field
                id="name"
                label="Vorname"
                name="name"
                placeholder="Vorname"
                size="xl"
                fullWidth={true}
                autoFocus={true}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
              <Spacer />
              <Field
                id="email"
                label="Email"
                name="email"
                placeholder="Email"
                size="xl"
                fullWidth={true}
              />

              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
              <Spacer />
              <Field
                id="password"
                label="Passwort"
                name="password"
                type="password"
                placeholder="Passwort"
                size="xl"
                fullWidth={true}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
              <Spacer />
              <Field
                name="role"
                component="select"
                id="role"
                label="Rolle"
                multiple={false}
                fullWidth={true}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Field>
              <Spacer />
              <Field
                component="select"
                id="app"
                name="app"
                label="App"
                multiple={false}
                fullWidth={true}
              >
                <option value="visionx">VisionX-Home</option>
                <option value="star">StaR</option>
              </Field>
              <Spacer />
              <Field
                component="select"
                id="database"
                name="database"
                label="Datenbank"
                multiple={false}
                fullWidth={true}
              >
                <option value="development">Development</option>
                <option value="production">Production</option>
              </Field>
              <Spacer />
              <Button
                type="submit"
                size="xl"
                css={{ width: "100%", fontSize: "2rem" }}
              >
                Neuen User erstellen
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
