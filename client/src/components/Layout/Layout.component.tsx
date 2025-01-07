import styled from "styled-components";

export const AuthLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(10, calc(100vw / 10));
  grid-template-rows: repeat(10,calc(100vh / 10));
  height: 100%;
  width: 100%;
`;
