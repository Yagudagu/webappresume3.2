import React from "react";

import { Wrapper, Content } from "./About.styles";

const About = (props) => (
  <Wrapper id={props.id}>
    <p id="first">
      I love building and fixing applications. I'm currently a Senior Customer
      Support Engineer for Oracle Cloud Infrastructure. Before that I was a
      Technical Support Engineer for Azure App Services, Azure Functions, and
      Azure Static Web Apps. I have a lot of experience with infrastructure and
      networking. I mostly code in JS/TS and Python, but have worked with Java
      and C# in the past.
    </p>

    <p id="second">
      I've worked in technology for almost 4 years. Before that, I lived and
      worked for 3 and a half years in Democratic Republic of Congo. I worked as
      a teacher, and accompanied various organizations that were working for
      peace and development around the country.
    </p>
  </Wrapper>
);

export default About;
