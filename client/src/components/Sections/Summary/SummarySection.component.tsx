import { Box } from "@mui/material";
import styled from "styled-components";

export const SummarySectionContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  /* column-gap:0.5em; */
  height:auto;
  
  // Desktop and Larger
  @media (min-width: 768px) {
    height: 111px;
    flex-direction: row;
    column-gap: 1em;
    height: 100%;
  }

  // Desktop
  @media (min-width: 1440px) {
    grid-column: 1 / span 6;
    grid-row: 2;
  }
`;
