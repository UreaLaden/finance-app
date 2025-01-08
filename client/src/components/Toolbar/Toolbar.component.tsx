import { Box } from "@mui/material";
import styled from "styled-components";

export const ToolbarContainer = styled.div<{ $collapsed: boolean }>`
  background-color: var(--grey-900);
  min-height: 74px;
  height: 74px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  color: var(--grey-300);
  display: flex;
  justify-content: space-around;
  align-items: end;
  border-radius: 8px 8px 0 0;
  left: 0;

  // Desktop
  @media (min-width: 1042px) {
    width: ${({ $collapsed }) => ($collapsed ? "100px" : "300px")};
    height: 100vh;
    display: block;
    flex-direction: column;
    align-items: start;
    box-sizing: border-box;
    transition: width 0.3s ease-in-out;
    border-radius: 0 8px 8px 0;

    & .logout-button {
      position: absolute;
      bottom: 1em;
      padding-left: 40%;
    }

    & .toolbar-icon {
      padding: 0 2em;
    }

    &::before {
      content: "${({ $collapsed }) => ($collapsed ? "f" : "finance")}";
      color: var(--grey-100);
      font-size: var(--font-size-xxlarge);
      font-weight: bold;

      height: 150px;
      width: ${({ $collapsed }) => ($collapsed ? "auto" : "50px")};
      width: 100%;
      display: block;
      padding-left: 1em;
      line-height: 150px;
    }
  }
`;

export const ToolbarSelector = styled(Box)<{
  $active?: boolean;
  $collapsed?: boolean;
}>`
  width: 68.6px;
  height: 80%;
  background-color: ${({ $active }) =>
    $active ? "var(--grey-100)" : "var(--grey-900)"};
  border-radius: 8px 8px 0 0;
  border-bottom: ${({ $active }) =>
    $active ? "3px solid var(--green-primary)" : "none"};
  color: ${({ $active }) => ($active ? "var(--grey-900)" : "var(--grey-300)")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ $active }) => ($active ? "var(--grey-900)" : "var(--white)")};

    .toolbar-icon path {
      fill: ${({ $active }) =>
        $active ? "var(--green-primary)" : "var(--white)"};
    }
  }

  // Tablet
  @media (min-width: 769px) {
    width: 104px;
    flex-direction: column;
    row-gap: 0.5em;
  }

  // Desktop
  @media (min-width: 1041px) {
    width: 90%;
    border-bottom: none;
    border-left: ${({ $active }) =>
      $active ? "3px solid var(--green-primary)" : "none"};
    border-radius: 0 8px 8px 0;
    height: 68.6px;
    flex-direction: row;
    justify-content: start;
  }

  & .toolbar-selector-text {
    transition: opacity 0.3s ease, width 0.3s ease;
    opacity: ${({ $collapsed }) => ($collapsed ? "0" : "1")};
    width: ${({ $collapsed }) => ($collapsed ? "0" : "auto")};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & .toolbar-icon {
    transform: ${({ $active }) => ($active ? "scale(1.5)" : "scale(1)")};
    path {
      transition: fill 0.3s ease-in-out;
      fill: ${({ $active }) =>
        $active ? "var(--green-primary)" : "var(--grey-300)"};
    }
  }
`;

export const ToggleButton = styled.div<{ $collapsed: boolean }>`
  display: flex;
  position: absolute;
  bottom: 4em;
  cursor: pointer;

  & .collapse-icon {
    transform: rotate(0deg);
    padding: 0 2em;
    opacity: 1;
    transition: transform 0.5s ease, opacity 0.3s ease;
  }

  & .expand-icon {
    padding: 0 2em;
    transform: rotate(180deg);
    opacity: 1;
    transition: transform 0.5s ease, opacity 0.3s ease;
  }

  & .toolbar-selector-text {
    transition: opacity 1s ease, width 1s ease;
    opacity: ${({ $collapsed }) => ($collapsed ? "0" : "1")};
    width: ${({ $collapsed }) => ($collapsed ? "0" : "auto")};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const LogoutButton = styled.div<{ $collapsed: boolean }>`
  display: flex;
  position: absolute;
  bottom: 1em;
  cursor: pointer;
  align-items: center;

  & .logout-icon {
    transform: rotate(0deg);
    padding: 0 2em;
    opacity: 1;
    transition: transform 0.5s ease, opacity 0.3s ease;
  }

  & .expand-icon {
    padding: 0 2em;
    transform: rotate(180deg);
    opacity: 1;
    transition: transform 0.5s ease, opacity 0.3s ease;
  }

  & .toolbar-selector-text {
    transition: opacity 1s ease, width 1s ease;
    opacity: ${({ $collapsed }) => ($collapsed ? "0" : "1")};
    width: ${({ $collapsed }) => ($collapsed ? "0" : "auto")};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
