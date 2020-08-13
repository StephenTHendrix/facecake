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
  padding: 25px;
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

const cards = [
  {title: 'Electricity', price: '19', detail: 'Options for every lifestyle.',},
  {title: 'Internet', price: '29', detail: 'Fastest streaming speeds.',},
  {title: 'TV', price: '39', detail: 'Programming for everyone.',},
  {title: 'Security', price: '19', detail: 'Smart home automation.',},
  {title: 'Insurance', price: '5', detail: 'Protect what matters most.',},
]

export const Pricing = () => {
  return (
    <Container>
      <StyledSectionTitle number="04" title="Pricing" />
      <Heading>Enjoy the best deals.</Heading>
      <Subheading>Exclusive rates and discounts you won't find anywhere else.</Subheading>
      <FlexRow>
        {isMobileDevice ? <Card title="Internet" price="29" detail="Fastest streaming speeds." /> : cards.map((card) => {
          return <Card key={card.title} title={card.title} price={card.price} detail={card.detail}/>
        })}
      </FlexRow>
    </Container>
  )
}