import React from "react";
import styled from "styled-components";

import rightArrow from "_images/rightArrow.svg";
import risingLine from "_images/risingLine.svg";
import fallingLine from "_images/fallingLine.svg";
import { SectionTitle } from "_components/sectionTitle";
import { colors, deviceSize } from "_constants/styleConstants";
import { Circle } from "_components/circle";
import { Card } from "./components/card";
import { NumberedCircle } from "./components/numberedCircle";

const Container = styled.div`
  width: 100%;
  padding: 50px;
  background-color: ${colors.parchment};

  @media (max-width: ${deviceSize.tablet}px) {
    padding: 20px;
  }
`;

const TopRow = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const BottomRow = styled.div`
  display: flex;
  width: 100%;
`;

const TitleText = styled.div`
  width: 25%;
  margin-right: 50px;

  @media (max-width: ${deviceSize.tablet}px) {
    width: initial;
    margin-right: 10px;
  }
`;

const Subtext = styled.div`
  font-size: 32px;
`;

const DetailText = styled.div`
  color: ${colors.darkGray};
  width: 50%;

  @media (max-width: ${deviceSize.tablet}px) {
    width: initial;
  }
`;

const LearnMoreRow = styled.div`
  display: flex;
  align-items: center;
`;

const LearnMoreText = styled.div`
  font-size: 12px;
  color: ${({ color }) => color};
  margin-left: 10px;
`;

const Arrow = styled.img`
  height: 25px;
  vertical-align: middle;
`;

const CircleAndLine = styled.div`
  display: flex;
  align-items: center;
`;

const Line = styled.img`
  height: 150px;
  ${({ number }) =>
    (number === "1" || number === "3") && "position: relative; bottom: 40px;"};

  @media (max-width: ${deviceSize.tablet}px) {
    display: none;
  }
`;

const circles = [
  {
    number: "1",
    mainText: "Share",
    detail: "Enter the service address and pick which services you want.",
  },
  {
    number: "2",
    mainText: "Compare",
    detail:
      "We instantly show you options from top providers to compare for free.",
  },
  {
    number: "3",
    mainText: "Save",
    detail: "Choose your favorites and secure the best rates in an instant.",
  },
  {
    number: "4",
    mainText: "Enjoy",
    detail: "Sit back and relax knowing you've tackled everything.",
  },
];

const numbers = ["1", "2", "3", "4"];

export const HowItWorks = () => {
  return (
    <Container>
      <TopRow>
        <TitleText>
          <SectionTitle number="02" title="HOW IT WORKS" />
          <Subtext>Connect everything in minutes</Subtext>
        </TitleText>
        <div>
          <DetailText>
            Technology has made buying the right car, house - the right anything
            really - super easy. Why would connecting home services & utilities
            any different? Welcome to Cake--the modern way to get connected.
          </DetailText>
          <LearnMoreRow>
            <Circle color={colors.darkGray} />
            <LearnMoreText color="black">
              Get started <Arrow src={rightArrow} />
            </LearnMoreText>
          </LearnMoreRow>
        </div>
      </TopRow>
      <BottomRow>
        {circles.map((circle) => {
          return (
            <>
              <Card
                number={circle.number}
                mainText={circle.mainText}
                detail={circle.detail}
              />
              {circle.number === "1" || circle.number === "3" ? (
                <Line number={circle.number} src={fallingLine} />
              ) : (
                circle.number === "2" && <Line src={risingLine} />
              )}
            </>
          );
        })}
        {/* {numbers.map((number) => {
          return <CircleAndLine><NumberedCircle number={number} />
          {(number === '1' || number === '3') ? <Line src={fallingLine} /> : number === '2' && <Line src={risingLine} />}
          </CircleAndLine>
        })} */}
      </BottomRow>
    </Container>
  );
};
