import styled from "styled-components";

export const Illustration = styled.div`
  position: absolute;
  top: 0;
  background-color: var(--grey-900);
  width: 90%;
  color: var(--white);
  padding: 5%;
  text-align: center;
  font-weight: bold;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "finance";
    font-size: var(--font-size-xxlarge);
    display: block;
    width: auto;
  }

  // Hide on large screens
    @media (min-width: 1040px) {
        display: none;
    }

  
`;
