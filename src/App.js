import React from "react";
import styled from 'styled-components';

import { Curve } from "_components/curve";
import att from "_images/companyLogos/att.png";
import spectrum from "_images/companyLogos/spectrum.png";
import lemonade from "_images/companyLogos/lemonade.png";
import vivint from "_images/companyLogos/vivint.png";
import bellhops from "_images/companyLogos/bellhops.png";
import partners from '_images/partners.png';
import { GlobalStyles } from "./globalStyles";
import { Hero } from "./_pages/hero";
import { Services } from "./_pages/services";
import { HowItWorks } from "_pages/howItWorks";
import { Allies } from "_pages/allies";
import { Pricing } from "_pages/pricing";
import { Footer } from "_pages/footer";

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
  width: 100vw;
  background-color: ${({ color }) => color};
`;

const Partners = styled.img`
  max-width: 100%;
  padding: 10px;
`;

const logos = [att, spectrum, lemonade, vivint, bellhops];

const StyledCurve = styled(Curve)`
  display: block;
  ${({ toFooter }) => toFooter && 'background-color: black;'}
`;

function App({ className }) {
  return (
    <div>
      <GlobalStyles />
      <Hero />
      <StyledCurve color="black" className={className}/>
      <Partners src={partners} />
      <Services />
      <StyledCurve color={colors.parchment} straightOnBottom className={className}/>
      <HowItWorks />
      <StyledCurve color={colors.parchment} className={className}/>
      <Allies />
      <StyledCurve color={colors.parchment} straightOnBottom className={className}/>
      <Pricing />
      <StyledCurve color={colors.parchment} toFooter className={className}/>
      <Footer />
    </div>
  );
}

export default App;
