import { Box } from "@mui/material";
import styled from "styled-components";

export const DisplayCardContainer = styled(Box)`
  background-color: var(--white);
  padding: 1em;
  border-radius: 8px;
  `;

export const DisplayHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :nth-child(1) {
    font-size: var(--font-size-large);
    line-height: var(--line-height-normal);
    font-weight: bold;
  }
`;
