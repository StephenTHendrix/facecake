import React from "react";
import { GlobalStyles } from "./globalStyles";
import { Hero } from "./_pages/hero";
import { Services } from "./_pages/services";
import { HowItWorks } from "_pages/howItWorks";
import { Allies } from "_pages/allies";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Hero /> */}
      {/* <Services /> */}
      <HowItWorks />
      <Allies />
    </>
  );
}

export default App;
