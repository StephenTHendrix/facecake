import React from "react";
import styled from "styled-components";

import rightArrow from "_images/rightArrow.svg";
import { colors, deviceSize } from "_constants/styleConstants";
import { ReactComponent as Logo } from "_images/logo.svg";
import logo from "_images/logo.png";

const Container = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  text-align: left;
  padding: 100px;

  @media (max-width: ${deviceSize.tablet}px) {
    padding: 30px;
  }
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
  width: 25%;
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
        {/* <img src={logo} style={{height: "20px", backgroundColor: "white"}}/> */}
        <MainText>
          The easy way to connect
          <br />
          home services & utilities.
        </MainText>
        <SubText>Compare options. Zero hassles. Instant everything.</SubText>
        <AddressRow>
          <AddressText placeholder="Enter your address..." />
          <AddressButton>
            <ButtonText>Start</ButtonText> <Arrow src={rightArrow} />
          </AddressButton>
        </AddressRow>
      </Container>
    </>
  );
};
