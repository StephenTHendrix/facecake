import React from "react";
import styled from "styled-components";

import rightArrow from "_images/rightArrow.svg";
import { colors } from "_constants/styleConstants";

const Container = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  text-align: left;
  padding: 100px;
`;

const MainText = styled.div`
  font-size: 32px;
`;

const SubText = styled.div`
  font-size: 16px;
  color: ${colors.darkGray};
`;

const AddressRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  color: ${colors.darkGray};
  margin-top: 20px;
`;

const AddressText = styled.input`
  width: 50%;
  border: none;
  border-bottom: 1px solid ${colors.darkGray};
  background-color: black;
  margin-right: 30px;
  color: ${colors.darkGray};
`;

const AddressButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.span``;

const Arrow = styled.img`
  height: 40px;
`;

export const Hero = () => {
  return (
    <>
    <Container>
      <MainText>
        Hi, we're Cake. <br />
        The fastest, most convenient way to connect home services & utilities.
      </MainText>
      <SubText>Compare options. Zero hassles. Instant everything.</SubText>
      <AddressRow>
        <AddressText placeholder="Enter your address..." />
        <AddressButton>
          <ButtonText>Start</ButtonText>
            {" "}
            <Arrow src={rightArrow} />
        </AddressButton>
      </AddressRow>
    </Container>
    </>
  );
};
