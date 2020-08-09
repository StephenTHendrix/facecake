import React from 'react';
import styled from 'styled-components';
import { colors } from '_constants/styleConstants';

const Rectangle = styled.div`
  height: 400px;
  width: 250px;
  background-color: ${colors.parchment};
`;

export const LeftRectangle = () => {
  return (
    <Rectangle />
  )
}