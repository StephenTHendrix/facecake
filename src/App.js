import React from "react";
import { GlobalStyles } from "./globalStyles";
import { Hero } from "./_pages/hero";
import { Services } from "./_pages/services";

function App() {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <Services />
    </>
  );
}

export default App;
