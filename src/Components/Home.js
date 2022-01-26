import * as React from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";

import Header from "./Header";
import TextBox from "./TextBox";
import About from "./About";
import ExperienceNew from "./ExperienceNew";
import Projects from "./Projects";
import Contact from "./Contact";

export const Home = () => {
  return (
    <>
      <Header />
      <TextBox id="top" />
      <ExperienceNew id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
    </>
  );
};
