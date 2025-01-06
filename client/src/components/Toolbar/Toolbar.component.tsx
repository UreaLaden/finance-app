import { Box } from "@mui/material";
import styled from "styled-components";

export const ToolbarContainer = styled.div`
  background-color: var(--grey-900);
  min-height: 74px;
  height: 74px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  color: var(--grey-300);
  display: flex;
  justify-content: space-around;
  align-items: end;
  border-radius: 8px 8px 0 0;
`;

export const ToolbarSelector = styled(Box)<{ $active?: boolean }>`
  width: 68.6px;
  height: 80%;
  background-color: ${({ $active }) =>
    $active ? "var(--grey-100)" : "var(--grey-900)"};
  border-radius: 8px 8px 0 0;
  border-bottom: ${({ $active }) =>
    $active ? "3px solid var(--green-primary)" : "none"};
  display: flex;
  justify-content: center;
  align-items: center;

  & .toolbar-icon {
  transform: ${({ $active }) => ($active ? "scale(1.5)" : "scale(1)")};
    path{
    fill: ${({ $active }) => ($active ? "var(--green-primary)" : "var(--grey-300)")};
    }
  }
`;
