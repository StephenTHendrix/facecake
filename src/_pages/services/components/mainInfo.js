import React from "react";
import styled from "styled-components";

import { SectionTitle } from "_components/sectionTitle";
import { colors } from "_constants/styleConstants";
import { Circle } from "_components/circle";
import rightArrow from '_images/rightArrow.svg';

const Container = styled.div`
  border-bottom: 1px solid ${colors.darkGray}
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
        At Cake, we're all about connecting you and millions of others to the
        best deals on internet, TV, home security, electricity, and more.
        Helping you shop for home services is definitely what we do best, but
        it's not all we do. <br />
        <br />
        Cake is a free tool for home service shopping, sure, but it's also a
        resource for learning how to make the most of those services. Read on to
        discover who we are, what we do and how and why we do it.
      </Detail>
      <Divider />
      <LearnMoreRow>
      <Circle color={colors.darkGray}/>
      <TextColumn>
      <LearnMoreText color={colors.darkGray}>
        Interested in our values?
      </LearnMoreText>
      <LearnMoreText color="black">Learn more about the company <Arrow src={rightArrow} /></LearnMoreText>
      </TextColumn>
      </LearnMoreRow>
    </>
  );
};
