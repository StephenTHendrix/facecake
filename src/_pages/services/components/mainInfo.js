import React from "react";
import styled from "styled-components";

import { SectionTitle } from "_components/sectionTitle";
import { colors } from "_constants/styleConstants";
import { Circle } from "_components/circle";
import rightArrow from "_images/rightArrow.svg";

const Container = styled.div`
  border-bottom: 1px solid ${colors.darkGray};
`;

const Heading = styled.div`
  font-size: 32px;
`;

const Detail = styled.div`
  font-size: 16px;
  color: ${colors.darkGray};
`;

const Divider = styled.hr`
  margin: 20px 0px;
`;

const LearnMoreRow = styled.div`
  display: flex;
  align-items: center;
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const LearnMoreText = styled.div`
  font-size: 12px;
  color: ${({ color }) => color};
`;

const Arrow = styled.img`
  height: 25px;
  vertical-align: middle;
`;

export const MainInfo = () => {
  return (
    <>
      <SectionTitle number="01" title="OUR SERVICES" />
      <Heading>Moving is a piece of cake&trade;</Heading>
      <Detail>
        To busy people who just want it done, Cake is the home service and
        utility connector that is the fastest and most convenient way to connect
        services & utilities for your home. <br />
        <br />
        Instantly connect electricity, internet, tv, smart home security,
        insurance, water, gas, movers--basically everything you'll need for your
        move.
      </Detail>
      <Divider />
      <LearnMoreRow>
        <Circle color={colors.darkGray} />
        <TextColumn>
          <LearnMoreText color={colors.darkGray}>Ready?</LearnMoreText>
          <LearnMoreText color="black">
            Get started <Arrow src={rightArrow} />
          </LearnMoreText>
        </TextColumn>
      </LearnMoreRow>
    </>
  );
};
