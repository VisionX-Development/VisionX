import styled from "styled-components";
import { Spacer, Button } from "@nextui-org/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useStoreActions } from "../../store/GlobalState";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import spinner from "../../src/images/spinner.svg";

interface MyFormValues {
  email: string;
  password: string;
}

const SignInSchema = Yup.object().shape({
  password: Yup.string().required("Bitte geben Sie ein Passwort ein."),
  email: Yup.string()
    .email("Email ist ungültig. Bitte korrekte Email eingeben.")
    .required("Bitte geben Sie eine Email ein."),
});

export const LoginModal = (props: any): JSX.Element => {
  const initialValues: MyFormValues = { email: "", password: "" };
  const setAlert = useStoreActions((state) => state.setAlert);
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const handleSignIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const result = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });
      if (result) {
        if (!result.error) {
          router.replace("/dashboard");
          setLoading(false);
          props.toggle();
        } else {
          setAlert({ message: result.error, type: "warning" });
          setLoading(false);
        }
      }
    } catch (error: any) {
      setAlert({ message: error.message, type: "warning" });
      setLoading(false);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={(values, actions) => {
        handleSignIn(values.email, values.password);
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
                id="email"
                label="Email"
                name="email"
                placeholder="Email"
                size="xl"
                fullWidth={true}
                autoFocus={true}
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
              <Spacer y={2} />
              <Button
                type="submit"
                size="xl"
                css={{ width: "100%", fontSize: "2rem", minWidth: "unset" }}
              >
                Login
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
  max-height: 40vh;

  input {
    width: 100%;
    height: 3rem;
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
