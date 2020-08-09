import React from "react";
import styled from "styled-components";

import rightArrow from "./rightArrow.svg";

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
  color: gray;
`;

const AddressRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  color: gray;
  margin-top: 20px;
`;

const AddressText = styled.input`
  width: 50%;
  border: none;
  border-bottom: 1px solid gray;
  background-color: black;
  margin-right: 30px;
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
  );
};
