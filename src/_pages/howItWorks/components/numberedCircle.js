import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  border-radius: 100%;
  color: black;
  border: 3px solid black;
  margin: 0 auto;
  font-size: 36px;
  margin-top: ${({ number }) => (number === '2' || number === '4') && '40px'};
`;

export const NumberedCircle = ({ number }) => {
  return (
  <Circle number={number}>{number}</Circle>
  )
}