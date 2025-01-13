import { Color } from "@/utils/models";
import { Box } from "@mui/material";
import styled from "styled-components";

export const BillCardContainer = styled(Box)<{ $theme: Color }>`
  background-color: ${({ $theme }) => $theme};
  position: relative;
  height: 60px;
  border-radius: 8px;

  &::before {
    content: "";
    width: calc(100% - 4px);
    min-height: 60px;
    height: "100%";
    position: "absolute";
    top: 0;
    left: 0;
    background-color: var(--beige-100);
    display: block;
    transform: translateX(4px);
    border-radius: 8px;
  }

  :nth-child(1) {
    position: absolute;
    top: 0;
    left: 8px;
    width: calc(100% - 12px);
    height: 100%;
    color: var(--grey-500);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  :nth-child(2) {
    position: absolute;
    top:0;
    right:8px;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;
    color:var(--grey-900);
    font-weight:bold;
    font-size:var(--font-size-large);
  }
`;
