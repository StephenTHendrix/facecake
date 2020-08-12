import React from 'react';
import styled from 'styled-components';
import { colors } from '_constants/styleConstants';
import { SectionTitle } from '_components/sectionTitle';
import { Card } from './components/card';
import { isMobileDevice } from '_helpers';

const Container = styled.div`
  width: 100%;
  background-color: ${colors.parchment};
  text-align: center;
  padding-bottom: 25px;
`;

const StyledSectionTitle = styled(SectionTitle)`
  margin: 0 auto;
`;

const Heading = styled.div`
  font-size: 32px;
  padding: 20px;
`;

const Subheading = styled.div`
  color: ${colors.darkGray};
  font-size: 16px;
  margin-bottom: 50px;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Pricing = () => {
  return (
    <Container>
      <StyledSectionTitle number="04" title="Pricing" />
      <Heading>Monthly plans for less than a parking space</Heading>
      <Subheading>Text Text Text Text Text Text Text Text Text</Subheading>
      <FlexRow>
        <Card hide={isMobileDevice} />
        <Card />
        <Card hide={isMobileDevice} />
      </FlexRow>
    </Container>
  )
}