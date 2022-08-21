import React, { useState, useRef, FunctionComponent } from "react";
import styled from "styled-components";
import { Input, Spacer, Button } from "@nextui-org/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface NavbarProps {
  onConfirm: () => void;
  onCancel: () => void;
}

interface MyFormValues {
  email: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, "Passwort muss mindestens 5 Zeichen lang sein.")
    .max(50, "Passwort ist zu lang!")
    .required("Bitte geben Sie ein Passwort ein."),
  email: Yup.string()
    .email("Email ist ungültig. Bitte korrekte Email eingeben.")
    .required("Required"),
});

export const LoginModal: React.FC<NavbarProps> = (props: NavbarProps) => {
  const initialValues: MyFormValues = { email: "", password: "" };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        console.log(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <FormWrapper>
          <Form>
            <Field
              id="email"
              label="Email"
              name="email"
              placeholder="Email"
              size="xl"
              fullWidth={true}
            />

            <ErrorMessage name="email" />
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
            <ErrorMessage name="password" />
            <Spacer y={2} />
            <Button type="submit" size="xl" css={{ width: "100%" }}>
              Login
            </Button>
          </Form>
        </FormWrapper>
      )}
    </Formik>
  );
};

const FormWrapper = styled.div`
  width: 40vw;
  padding: 30px;
  font-size: 1.3rem;

  .nextui-c-hzQjrs {
    color: #fff;
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    height: 40px;
    font-size: 1.3rem;
    border-radius: 5px;
    padding: 7px;
  }
`;

const ErrorMessageWrapper = styled.div`
  padding: 10px;
`;
