import { styled } from "styled-components";

export const BudgetContainer = styled.div<{ $theme: string }>`
  min-height: 486px;
  background-color: ${({ $theme }) => $theme};
  border-radius: 8px;
  order:2;
  grid-column:2;
`;
