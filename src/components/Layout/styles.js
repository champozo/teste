import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  background-color: #242731;
  width: 100%;
  height: 100vh;

  @media(max-width: 428px) {
    flex-direction: column;
  }
`;
