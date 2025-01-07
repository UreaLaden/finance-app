import { Box } from "@mui/material";
import styled from "styled-components";

export const MainContent = styled.div<{ $isSidebarOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  transition: width 0.3s ease-in-out;
  height: calc(100vh - 74px);

  // Tablet
    @media (min-width: 768px) {
        height: calc(100vh - 74px);
    }

  // Desktop
  @media (min-width: 1042px) {
    width: ${({ $isSidebarOpen }) =>
      $isSidebarOpen ? "calc(100vw - 292px)" : "calc(100vw - 92px)"};
    height:auto;
  }
`;

export const MainInnerContent = styled(Box)`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 1em;

  // Tablet and Desktop
  @media (min-width: 768px) {
    padding: 1em 2em 0 2em;
  }
`;
