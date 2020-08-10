import React from "react";
import styled from "styled-components";

import { SectionTitle } from "_components/sectionTitle";
import { colors } from "_constants/styleConstants";
import att from "_images/companyLogos/att.png";
import spectrum from "_images/companyLogos/spectrum.png";
import lemonade from "_images/companyLogos/lemonade.png";
import vivint from "_images/companyLogos/vivint.png";
import bellhops from "_images/companyLogos/bellhops.png";

const Container = styled.div`
  width: 100%;
  background-color: white;
  padding-bottom: 50px;
`;

const TopRow = styled.div`
  display: flex;
  margin-left: 50px;
  margin-bottom: 50px;
`;

const TitleText = styled.div`
  width: 33%;
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
`;

const Logo = styled.img`
  max-height: 50px;
`;

const logos = [att, spectrum, lemonade, vivint, bellhops];

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
        {logos.map((logo) => {
          return (
            <LogoContainer>
              <Logo src={logo} />
            </LogoContainer>
          );
        })}
      </LogoRow>
      <LogoRow>
        {logos.map((logo) => {
          return (
            <LogoContainer>
              <Logo src={logo} />
            </LogoContainer>
          );
        })}
      </LogoRow>
      <LogoRow>
        {logos.map((logo) => {
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
