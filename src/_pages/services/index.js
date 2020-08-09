import React from "react";
import styled from "styled-components";
import { LeftRectangle } from "./components/leftRectangle";
import { ReviewCard } from "./components/reviewCard";
import { MainInfo } from "./components/mainInfo";

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  justify-content: space-around;
  padding: 75px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Services = () => {
  return (
    <Container>
      <Column>
        <LeftRectangle />
        <ReviewCard />
      </Column>
      <Column>
        <MainInfo />
      </Column>
    </Container>
  );
};
