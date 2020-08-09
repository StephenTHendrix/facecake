import React from 'react';
import styled from 'styled-components';
import { colors } from '_constants/styleConstants';

const Container = styled.div`
  height: 150px;
  width: 300px;
  background-color: ${colors.brand};
  position: relative;
  z-index: 1;
  bottom: 40px;
  left: 20px;
`;

export const ReviewCard = () => {
  return (
    <Container />
  )
}