import React from "react";
import styled from "styled-components";

import { NumberedCircle } from "./numberedCircle";
import { colors, deviceSize } from "_constants/styleConstants";

const Container = styled.div`
  text-align: center;
  margin-top: ${({ number }) => (number === '2' || number === '4') && '30px'};

  @media (max-width: ${deviceSize.tablet}px) {
    margin-top: 0px;
  }
`;

const MainText = styled.div`
  color: black;
  font-size: 24px;
  margin: 20px 0px;
`;

const Detail = styled.div`
  color: ${colors.darkGray};
  font-size: 16px;
`;

export const Card = ({ number, mainText, detail }) => {
  return (
    <Container number={number}>
      <NumberedCircle number={number} />
      <MainText>{mainText}</MainText>
      <Detail>{detail}</Detail>
    </Container>
  );
};
