import styled from "styled-components";

export const Title = styled.h1`
  user-select: none;
  padding: 0;
  margin: 0;
  font-size: 6em;

  @media (max-width: 1240px) {
    font-size: 4em;
  }

  @media (max-width: 800px) {
    font-size: 3em;
  }

  @media (max-width: 500px) {
    font-size: 3.5em;
  }
`;

export const SubTitle = styled.p`
  font-family: "mont-light";
  margin: 0 0 1% 0;
  padding: 0;
  font-size: 1em;

  @media (max-width: 1240px) {
    margin: 2% 0;
  }

  @media (max-width: 800px) {
    margin: 4% 0;
  }

  @media (max-width: 500px) {
    line-height: 1.5;
  }
`;

export const TitleCardContainer = styled.div`
  height: 80vh;

  @media (max-width: 400px) {
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
`;
