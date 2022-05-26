import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Spacer, Button } from "@nextui-org/react";

interface LoginModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

type Inputs = {
  email: string;
  password: string;
};

export const LoginModal: FunctionComponent<LoginModalProps> = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <React.Fragment>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <Input
            width="100%"
            clearable
            bordered
            labelPlaceholder="Email"
            color="default"
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
            clearable
            bordered
            labelPlaceholder="Password"
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
            css={{ width: "100%", backgroundColor: "rgba(120, 250, 140, 0.5)" }}
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
  width: 30vw;
  padding: 30px;
`;

const ErrorMessage = styled.div`
  padding: 10px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  background-color: lightgrey;
  :hover {
    background-color: grey;
  }
`;
