import { Box } from "@mui/material";
import styled from "styled-components";

export const BudgetSummaryContainer = styled(Box)`
  height: 583px;
  width: 100%;
  border-radius: 8px;
  background-color: var(--army-green-secondary);
  order: 1;
  grid-column: 1;

  @media (max-width: 1042px) {
    height: 345px;
    min-height:auto;
  }
`;
