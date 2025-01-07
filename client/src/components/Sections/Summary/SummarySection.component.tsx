import { Box } from "@mui/material";
import styled from "styled-components";

export const SummarySectionContainer = styled(Box)`
  width: 100%;
  height: 111px;
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;

  // Desktop and Larger
  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 1em;
    height: 100%;
  }
`;
