import React, { useState } from "react";
import styled from "styled-components";

import { colors } from "_constants/styleConstants";
import { InfoSubmitButton } from "./infoSubmitButton";

const Container = styled.div`
  ${({ hide }) => hide && 'display: none;'}
  background-color: white;
  text-align: center;
  color: ${colors.darkGray};
  padding: 50px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 40px rgba(210, 211, 212, 0.5);
    transform: translateY(-2px);
  }
`;

const Title = styled.div`
  font-size: 24px;
  ${({ hover }) => hover && `color: ${colors.brand}`}
`;

const Subtitle = styled.div`
  font-size: 16px;
  margin-bottom: 40px;
`;

const PriceContainer = styled.div`
  ${({ hover }) => hover && `color: ${colors.brand}`}
`;

const Price = styled.span`
  font-size: 24px;
`;

const Time = styled.span`
  font-size: 16px;
`;

const Divider = styled.hr`
  margin: 10px 0px;
`;

export const Card = ({ hide }) => {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <Container onMouseEnter={handleHover} onMouseLeave={handleHover} hide={hide}>
      <Title hover={hover}>Title Here</Title>
      <Subtitle>Get 2 days/month</Subtitle>
      <PriceContainer hover={hover}>
        <Price>$159</Price>
        <Time>/month</Time>
      </PriceContainer>
      <Divider />
      <Subtitle>Text Text Text Text Text Text Text</Subtitle>
      <InfoSubmitButton
        text="Get Started"
        color={hover ? colors.brand : colors.darkGray}
        cursor="pointer"
      />
    </Container>
  );
};
