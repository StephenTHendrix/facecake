import React from "react";
import styled from "styled-components";

import { NumberedCircle } from "./numberedCircle";
import { colors, deviceSize } from "_constants/styleConstants";

const Container = styled.div`
  text-align: center;
  margin-top: ${({ number }) => (number === '2' || number === '4') && '30px'};

  @media (max-width: ${deviceSize.tablet}px) {
    margin-top: 0px;
    margin-right: ${({ number }) => number !== '4' && '5px'};
  }
`;

const MainText = styled.div`
  color: black;
  font-size: 24px;
  margin: 20px 0px;

  @media (max-width: ${deviceSize.tablet}px) {
    font-size: 16px;
  }
`;

const Detail = styled.div`
  color: ${colors.darkGray};
  font-size: 16px;

  @media (max-width: ${deviceSize.tablet}px) {
    font-size: 14px;
    text-align: left;
  }
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
