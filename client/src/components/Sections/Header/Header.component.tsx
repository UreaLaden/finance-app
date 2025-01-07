import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: var(--grey-900);
  font-size: var(--font-size-xxlarge);
  font-weight: bold;
  line-height: var(--line-height-tight);
  padding: 0.5em 0;
  width: 100%;

  // Desktop
  @media (min-width: 1440px) {
    grid-column: 1 / span 6;
    grid-row: 1;
  }
`;
