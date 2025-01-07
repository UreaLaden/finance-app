import { Color } from "@/utils/models";
import { Box } from "@mui/material";
import styled from "styled-components";

export const PotContainer = styled(Box)<{ $theme?: Color }>`
  min-height: 300px;
  width: 100%;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: ${({ $theme }) => $theme};
`;

export const ThemeIndicator = styled.span<{ $color: Color }>`
  background-color: ${({ $color }) => $color};
  border-radius: 50%;
  display: inline-block;
  height: 1em;
  margin-right: 0.5em;
  width: 1em;
  border: 1px solid var(--grey-900);
`;
