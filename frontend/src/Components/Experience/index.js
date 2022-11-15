import React from "react";

import { Wrapper, Content } from "./Experience.styles";

const About = (props) => (
  <Wrapper id={props.id}>
    <p id="first">
      I love building and fixing applications. I currently work as a Tier 3
      Technical Support Engineer for Azure App Services, Azure Functions, and
      Azure Static Web Apps. I provide solutions and fix issues in languages
      including node, python, C#, Java, and PHP. I also have experience as a
      Team Lead, supporting Microsoft Teams.
    </p>

    <p id="second">
      I've worked at my current company for about 2 years. Before that, I lived
      and worked for 3 and a half years in Democratic Republic of Congo. I
      worked as a teacher, and accompanied various organizations that were
      working for peace and development around the country.
    </p>
  </Wrapper>
);

export default About;
