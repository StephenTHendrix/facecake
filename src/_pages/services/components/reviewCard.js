import React from "react";
import styled from "styled-components";
import { colors } from "_constants/styleConstants";

import { Circle } from "_components/circle";

const Container = styled.div`
  height: 150px;
  width: 300px;
  background-color: ${colors.brand};
  position: relative;
  z-index: 1;
  bottom: 40px;
  left: 20px;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 12px;
`;

const CircleRow = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  margin-left: 20px;
`;

export const ReviewCard = () => {
  return (
    <Container>
      "Text Text Text Text Text Text Text Text Text Text Text Text Text" <br />
      <br />
      <CircleRow>
        <Circle color="white" />
        <Name>
        Jane Doe
        </Name>
      </CircleRow>
    </Container>
  );
};
