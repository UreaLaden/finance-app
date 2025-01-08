import { Box } from "@mui/material";
import styled from "styled-components";

export const RecurringBillSummarySection = styled.section`
  display: flex;
  height: auto;
  width: 100%;
  flex-direction: column;
  gap: 1em;

  :nth-child(1) {
    border: 1px solid green;
    height: 118px;
    border-radius: 12px;
    background-color:var(--grey-900);
    color: var(--white);
  }

  :nth-child(2) {
    border: 1px solid blue;
    height: 130px;
    border-radius: 12px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 204px;

    :nth-child(1) {
      height: 100%;
      flex: 1 1 50%;
    }

    :nth-child(2) {
      height: 100%;
      flex: 1 1 50%;
    }
  }

  @media (min-width: 1440px) {
    height: 100%;
    flex-direction: column;
    gap: 1.5em;
  }
`;

export const RecurringBillContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  @media(min-width:1440px){
    display:grid;
    grid-template-columns: 1fr 3fr;
  }
`;
