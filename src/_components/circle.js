import React from 'react';
import styled from 'styled-components';

import { deviceSize } from '_constants';

const StyledCircle = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${({ color }) => color};
  border-radius: 100%;

  @media (max-width: ${deviceSize.tablet}px) {
    min-width: 50px;
  }
`;

export const Circle = ({ color }) => {
  return (
    <StyledCircle color={color} />
  )
}