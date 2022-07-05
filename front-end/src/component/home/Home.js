import React from "react";
import Landing from "./landing/Landing";
import About from "./about/About";
import Section from "./section/Section";
import FEATURES from "./feature/FEATURES";
import Section2 from "./section2/Section2";
import Business from "./business/Business";
function Home() {
  return (
    <div style={{backgroundColor:"white"}}>
      <Landing />
      <About />
      <Section />
      <FEATURES />
      <Section2 />
      <Business />
    </div>
  );
}
export default Home;
