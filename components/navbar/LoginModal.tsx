import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Spacer, Button } from "@nextui-org/react";
import validator from "validator";

interface LoginModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

type Inputs = {
  email: string;
  password: string;
};

export const LoginModal: FunctionComponent<LoginModalProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const isEmail = validator.isEmail(data.email);
  };
  return (
    <React.Fragment>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <Input
            width="100%"
            clearable
            label="Email"
            size="xl"
            {...register("email", { required: true })}
          />

          {errors.email && (
            <ErrorMessage>
              <span>This field is required</span>
            </ErrorMessage>
          )}

          <Spacer y={2} />
          {/* include validation with required or other standard HTML validation rules */}
          <Input.Password
            width="100%"
            label="Password"
            size="xl"
            {...register("password", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.password && (
            <ErrorMessage>
              <span>This field is required</span>
            </ErrorMessage>
          )}
          <Spacer y={2} />

          <Button
            css={{
              width: "100%",
              backgroundColor: "rgba(120, 250, 140, 0.7)",
              fontSize: "1.5rem",
            }}
            type="submit"
          >
            Signup
          </Button>
        </form>
      </FormWrapper>
    </React.Fragment>
  );
};

const FormWrapper = styled.div`
  width: 40vw;
  padding: 30px;
  .nextui-c-hzQjrs {
    color: #fff;
    font-size: 1.5rem;
  }
`;

const ErrorMessage = styled.div`
  padding: 10px;
`;
