import { iLoginFormProps } from "@/utils/models";
import { FC, useMemo, useRef } from "react";
import {
  LinkContainer,
  LoginFormContainer,
  LoginFormHeader,
} from "./LoginForm.component";
import { InputField } from "../InputField/InputField";
import { InputFieldTypes } from "@/utils/helpers/constants";
import { CustomButton } from "../CustomButton/CustomButton";
import { Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { paths } from "@/utils/routers/config";

export const LoginForm: FC<iLoginFormProps> = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const ButtonText = useMemo(() => {
    if (location.pathname === paths.Login) {
      return "Login";
    } else {
      return "Create Account";
    }
  }, [location.pathname]);

  const SignupText = useMemo(() => {
    if (location.pathname === paths.Login) {
      return "Need to create an account?";
    } else {
      return "Already have an account?";
    }
  }, [location.pathname]);

  const LinkText = useMemo(() => {
    if (location.pathname === paths.Login) {
      return "Sign up";
    } else {
      return "Login";
    }
  }, [location.pathname]);

  const TitleText = useMemo(() => {
    if (location.pathname === paths.Login) {
      return "Login";
    } else {
      return "Sign Up";
    }
  }, [location.pathname]);

  const onLinkSelected = () => {
    if (location.pathname === paths.Login) {
      navigate(paths.Signup, { state: { from: location } });
    } else {
      navigate(paths.Login, { state: { from: location } });
    }
  };

  const onSubmitHandler = () => {
    props.onSubmit(
      nameRef.current?.value,
      emailRef.current?.value,
      passwordRef.current?.value
    );

    if (nameRef.current?.value) {
      nameRef.current.value = "";
    }
    if (emailRef.current?.value) {
      emailRef.current.value = "";
    }
    if (passwordRef.current?.value) {
      passwordRef.current.value = "";
    }
  };

  return (
    <LoginFormContainer className={"login-form"}>
      <LoginFormHeader>{TitleText}</LoginFormHeader>
      {location.pathname === paths.Signup && (
        <InputField
          mode={InputFieldTypes.TEXT}
          label="Name"
          placeholder={""}
          ref={nameRef}
        />
      )}
      <InputField
        mode={InputFieldTypes.TEXT}
        label="Email"
        placeholder={""}
        helperText={undefined}
        ref={emailRef}
      />
      <InputField
        mode={InputFieldTypes.PASSWORD}
        label="Create Password"
        placeholder={""}
        helperText={"Passwords must be at least 8 characters"}
        ref={passwordRef}
      />
      <CustomButton
        label={ButtonText}
        type="primary"
        onClick={onSubmitHandler}
        fullWidth={true}
      />
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{
          color: "var(--grey-500)",
          textAlign: "center",
          paddingTop: "1.5em",
        }}
      >
        <span>{SignupText}</span>
        <LinkContainer
          onClick={onLinkSelected}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => e.key === "Enter" && onLinkSelected()}
        >
          {LinkText}
        </LinkContainer>
      </Typography>
    </LoginFormContainer>
  );
};
