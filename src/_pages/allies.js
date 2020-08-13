import React from "react";
import styled from "styled-components";

import { SectionTitle } from "_components/sectionTitle";
import { colors, deviceSize } from "_constants/styleConstants";

import att from "_images/companyLogos/grayAtt.png";
import spectrum from "_images/companyLogos/graySpectrum.png";
import lemonade from "_images/companyLogos/grayLemonade.png";
import vivint from "_images/companyLogos/grayVivint.png";
import bellhops from "_images/companyLogos/grayBellhops.png";

import allied from "_images/companyLogos/grayAllied.png";
import adt from "_images/companyLogos/grayAdt.png";
import greenMountain from "_images/companyLogos/grayGreenMountain.png";
import toggle from "_images/companyLogos/grayToggle.png";
import reliant from "_images/companyLogos/grayReliant.png";

import brinks from "_images/companyLogos/grayBrinks.png";
import xfinity from "_images/companyLogos/grayXfinity.png";
import directv from "_images/companyLogos/grayDirectv.png";
import directEnergy from "_images/companyLogos/grayDirectEnergy.png";
import stateFarm from "_images/companyLogos/grayStateFarm.png";

const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: 50px;
`;

const TopRow = styled.div`
  display: flex;
  margin-left: 50px;
  margin-bottom: 50px;

  @media (max-width: ${deviceSize.tablet}px) {
    margin: 0 auto;
  }
`;

const TitleText = styled.div`
  width: 33%;

  @media (max-width: ${deviceSize.tablet}px) {
    width: initial;
    padding: 10px;
  }
`;

const Heading = styled.div`
  font-size: 32px;
  margin-top: 20px;
`;

const Subheading = styled.div`
  font-size: 16px;
  color: ${colors.darkGray};
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  border: 1px dotted ${colors.darkGray};
  height: 200px;
  max-width: 20%;

  @media (max-width: ${deviceSize.tablet}px) {
    height: 100px;
  }
`;

const Logo = styled.img`
  max-height: 50px;
  max-width: 100%;
`;

const topLogos = [att, spectrum, lemonade, vivint, bellhops];
const middleLogos = [allied, adt, greenMountain, toggle, reliant];
const bottomLogos = [brinks, xfinity, directv, directEnergy, stateFarm];

export const Allies = () => {
  return (
    <Container>
      <TopRow>
        <TitleText>
          <SectionTitle number="03" title="ALLIES" />
          <Heading>A few of our friends</Heading>
          <Subheading>It's better together</Subheading>
        </TitleText>
      </TopRow>
      <LogoRow>
        {topLogos.map((logo) => {
          return (
            <LogoContainer>
              <Logo src={logo} />
            </LogoContainer>
          );
        })}
      </LogoRow>
      <LogoRow>
        {middleLogos.map((logo) => {
          return (
            <LogoContainer>
              <Logo src={logo} />
            </LogoContainer>
          );
        })}
      </LogoRow>
      <LogoRow>
        {bottomLogos.map((logo) => {
          return (
            <LogoContainer>
              <Logo src={logo} />
            </LogoContainer>
          );
        })}
      </LogoRow>
    </Container>
  );
};
