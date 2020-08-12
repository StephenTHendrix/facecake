import React from "react";
import styled from "styled-components";
import { LeftRectangle } from "./components/leftRectangle";
import { ReviewCard } from "./components/reviewCard";
import { MainInfo } from "./components/mainInfo";
import { isMobileDevice } from "_helpers";
import { deviceSize } from "_constants";

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  justify-content: space-around;
  padding: 75px;

  @media (max-width: ${deviceSize.tablet}px) {
    padding: 30px;
  }
`;

const Column = styled.div`
  display: ${({ hide }) => hide ? 'none' : 'flex'};
  flex-direction: column;
  flex: 1;
`;

export const Services = () => {
  return (
    <Container>
      <Column hide={isMobileDevice}>
        <LeftRectangle />
        <ReviewCard />
      </Column>
      <Column>
        <MainInfo />
      </Column>
    </Container>
  );
};
