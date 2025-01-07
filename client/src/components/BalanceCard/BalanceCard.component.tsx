import { Box } from "@mui/material";
import styled from "styled-components";

export const CardContainer = styled(Box)<{ $highlight?: boolean }>`
  background-color: ${({ $highlight }) =>
    $highlight ? "var(--grey-900)" : "var(--white)"};
  color: ${({ $highlight }) =>
    $highlight ? "var(--white)" : "var(--grey-500)"};
  width: 100%;
  height: 111px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0;
  justify-content: center;
  padding-left: 2em;
  row-gap: 1em;
  box-sizing: border-box;
  box-shadow: ${({ $highlight }) =>
    !$highlight
      ? "1px 1px 5px rgba(0,0,0,0.1)"
      : "1px 1px 5px rgba(0,0,0,0.1)"};

  :nth-child(1) {
    font-size: var(--font-size-medium);
    font-weight: normal;
    line-height: var(--line-height-normal);
    margin: 0;
  }

  :nth-child(2) {
    font-size: var(--font-size-xxlarge);
    line-height: var(--line-height-tight);
    font-weight: bold;
    margin: 0;
  }
`;
