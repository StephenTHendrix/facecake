import React from 'react';
import styled from 'styled-components';
import { colors } from '_constants/styleConstants';
import { InfoSubmitButton } from './infoSubmitButton';

const Container = styled.div`
  background-color: white;
  text-align: center;
  color: ${colors.darkGray};
  padding: 50px;
`;

const Title = styled.div`
  font-size: 24px;
`;

const Subtitle = styled.div`
  font-size: 16px;
  margin-bottom: 40px;
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

export const Card = () => {
  return (
    <Container>
      <Title>Title Here</Title>
      <Subtitle>Get 2 days/month</Subtitle>
      <div><Price>$159</Price><Time>/month</Time></div>
      <Divider />
      <Subtitle>Text Text Text Text Text Text Text</Subtitle>
      <InfoSubmitButton text="Get Started" color={colors.darkGray} />
    </Container>
  )
}