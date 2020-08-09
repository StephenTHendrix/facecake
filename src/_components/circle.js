import React from 'react';
import styled from 'styled-components';

const StyledCircle = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${({ color }) => color};
  border-radius: 100%;
`;

export const Circle = ({ color }) => {
  return (
    <StyledCircle color={color} />
  )
}