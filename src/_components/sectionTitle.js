import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 200px;
`;

const Text = styled.span``;

const Line = styled.span`
  height: 2px;
  width: 40px;
  background-color: black;
  margin: 0 auto;
`;

export const SectionTitle = ({ number, title, className }) => {
  return (
    <Container className={className}>
      <Text>{number}</Text> <Line /> <Text>{title}</Text>
    </Container>
  );
};
