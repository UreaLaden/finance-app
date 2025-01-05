import styled from "styled-components";

export const LoginFormContainer = styled.div`
  border-radius: 8px;
  background-color: var(--white);
  color: var(--grey-900);
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  min-width: 300px;

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
