import { Box } from "@mui/material";
import styled from "styled-components";

export const LoginFormContainer = styled.div`
  border-radius: 8px;
  background-color: var(--white);
  color: var(--grey-900);
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  flex: 1;
  padding: 1em 1em 2em 1em;
  min-width: 343px;
  max-width: 343px;
  height: fit-content;

  @media (min-width: 768px) {
    min-width: 560px;
    max-width: 560px;
  }

  & > button {
    margin-top: 1em;
  }
`;

export const LinkContainer = styled.span`
  font-size: var(--font-size-large);
  color: var(--grey-900);
  padding-left: 0.5em;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
`;

export const LoginFormHeader = styled.h1``;

export const AuthFormContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / -1; /* Default for mobile and tablet */
  grid-row: 1 / -1;
  max-height: 100vh;
  border-radius: 8px;
  box-sizing: border-box;

  // Resize anything larger than tablet
  @media (min-width: 1041px) {
    grid-column: 4 / -2;
    grid-row: 5;
  }

  // Resize anything larger than desktop
  @media (min-width: 1441px) {
    grid-column: 4 / -3;
    grid-row: 5;
  }
`;
