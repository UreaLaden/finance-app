import { iLoginFormProps } from "@/utils/models";
import { FC, useMemo } from "react";
import {
  LinkContainer,
  LoginFormContainer,
  LoginFormHeader,
} from "./LoginForm.component";
import { InputField } from "../InputField/InputField";
import { InputFieldTypes } from "@/utils/helpers/constants";
import { CustomButton } from "../CustomButton/CustomButton";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export const LoginForm: FC<iLoginFormProps> = () => {
  const location = useLocation();

  const ButtonText = useMemo(() => {
    if (location.pathname === "/login") {
      return "Login";
    } else {
      return "Create Account";
    }
  }, [location.pathname]);

  const SignupText = useMemo(() => {
    if (location.pathname === "/login") {
      return "Need to create an account?";
    } else {
      return "Already have an account?";
    }
  }, [location.pathname]);

  const LinkText = useMemo(() => {
    if (location.pathname === "/login") {
      return "Sign up";
    } else {
      return "Login";
    }
  }, [location.pathname]);

  const TitleText = useMemo(() => {
    if (location.pathname === "/login") {
      return "Login";
    } else {
      return "Sign Up";
    }
  },[location.pathname])

  return (
    <LoginFormContainer>
      <LoginFormHeader>{TitleText}</LoginFormHeader>
      <InputField mode={InputFieldTypes.TEXT} label="Name" placeholder={""} />
      <InputField
        mode={InputFieldTypes.TEXT}
        label="Email"
        placeholder={""}
        helperText={undefined}
      />
      {location.pathname !== "/login" && (
        <InputField
          mode={InputFieldTypes.PASSWORD}
          label="Create Password"
          placeholder={""}
          helperText={"Passwords must be at least 8 characters"}
        />
      )}
      <CustomButton
        label={ButtonText}
        type="primary"
        onClick={() => {}}
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
        <LinkContainer>{LinkText}</LinkContainer>
      </Typography>
    </LoginFormContainer>
  );
};
