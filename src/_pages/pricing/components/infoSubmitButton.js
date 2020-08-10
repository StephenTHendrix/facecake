import React from 'react';
import styled from 'styled-components';

import whiteRightArrow from '_images/whiteRightArrow.svg';

const Button = styled.button`
  min-width: 150px;
  max-width: 220px;
  height: 60px;
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  color: white;
  font-size: 16px;
  margin: 0 auto;
  border: none;
  cursor: ${({ cursor }) => cursor};
`;

const ButtonText = styled.span`
  height: 35px;
  line-height: 35px;
  padding: 0px 5px;
`;

const ArrowIcon = styled.img`
  height: 35px;
  padding: 0px 5px;
`;

export const InfoSubmitButton = ({ text, onClick, color, cursor }) => {
  return (
    <Button onClick={onClick} color={color} cursor={cursor}>
      <ButtonText>{text || 'Save & continue'}</ButtonText>
      <ButtonText>
        <ArrowIcon src={whiteRightArrow} />
      </ButtonText>
    </Button>
  );
};
