import React from "react";
import styled from 'styled-components';

import att from "_images/companyLogos/att.png";
import spectrum from "_images/companyLogos/spectrum.png";
import lemonade from "_images/companyLogos/lemonade.png";
import vivint from "_images/companyLogos/vivint.png";
import bellhops from "_images/companyLogos/bellhops.png";
import { GlobalStyles } from "./globalStyles";
import { Hero } from "./_pages/hero";
import { Services } from "./_pages/services";
import { HowItWorks } from "_pages/howItWorks";
import { Allies } from "_pages/allies";
import { Pricing } from "_pages/pricing";
import { Footer } from "_pages/footer";

import heroToServices from '_images/heroToServices.svg';
import privacyToSplit from '_images/privacyToSplit.svg';
import splitToFooter from '_images/splitToFooter.svg';
import { colors } from "_constants/styleConstants";
import { isMobileDevice } from "_helpers";

const LogoRow = styled.div`
  display: ${({ hide }) => hide ? 'none' : 'flex'};
  align-items: center;
  background-color: white;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 200px;
`;

const Logo = styled.img`
  max-height: 50px;
`;

const Transition = styled.img`
  width: 100%;
  height: 40px;
  background-color: ${({ color }) => color};
`;

const logos = [att, spectrum, lemonade, vivint, bellhops];

function App() {
  return (
    <div>
      <GlobalStyles />
      <Hero />
      {/* <Transition src={heroToServices} color="white"/> */}
      <LogoRow hide={isMobileDevice}>
        {logos.map((logo) => {
          return (
            <LogoContainer>
              <Logo src={logo} />
            </LogoContainer>
          );
        })}
      </LogoRow>
      <Services />
      {/* <Transition src={splitToFooter} color="white"/> */}
      <HowItWorks />
      <Allies />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
