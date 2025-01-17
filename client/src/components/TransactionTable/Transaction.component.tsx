import { Box } from "@mui/material";
import styled from "styled-components";

export const TransactionEntryContainer = styled(Box)`
  display: flex;
  align-items: center;
  padding: 1em;
  border-radius: 10px;

  .transaction-entry-display {
    display: flex;
    align-items: center;
    gap: 1em;
    flex: 1;
    flex-basis: 50%;

    & img {
      width: 40px;
      border-radius: 50%;
    }

    & .transaction-entry-name {
      font-size: var(--font-size-medium);
      font-weight: bold;
    }
  }

  & #credit {
    color: var(--green-primary);
  }

  .transaction-entry-details {
    display: flex;
    flex-direction: column;
    flex: 1;

    & .transaction-entry-amount {
      font-weight: bold;
    }

    & .transaction-entry-date {
      color: var(--gray-300);
      font-size: var(--font-size-small);
    }
  }
`;
