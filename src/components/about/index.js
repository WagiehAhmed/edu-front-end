import React from "react";
import {
  AboutContainer,
  AboutContent,
  AboutDescription,
  AboutImage,
  AboutImageContaimer,
  AboutInfo,
  AboutTitle,
} from "../../styles/about";
import { CustomButton } from "../../styles/common";

const About = ({ matches }) => {
  return (
    <AboutContainer>
      <AboutInfo matches={matches}>
        <AboutImageContaimer>
          <AboutImage src="./images/a3.jpg" />
        </AboutImageContaimer>
        <AboutContent matches={matches}>
          <AboutTitle matches={matches}>why choose us?</AboutTitle>
          <AboutDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
            corrupti! Aliquam rerum tempore molestiae esse magnam. Laborum quis
            fugiat rerum qui distinctio ratione. Iste explicabo eligendi odit
            quis dolorum voluptates.
          </AboutDescription>
          <CustomButton>our courses</CustomButton>
        </AboutContent>
      </AboutInfo>
    </AboutContainer>
  );
};

export default About;
