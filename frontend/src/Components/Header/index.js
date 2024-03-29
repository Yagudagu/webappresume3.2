import * as React from "react";
import { HashLink as Link } from "react-router-hash-link";

import { Wrapper, Content } from "./Header.styles";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  let yOffset = -260;

  if (window.innerWidth < 768) {
    yOffset = -100;
  }
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link smooth to="/#top" scroll={scrollWithOffset}>
          <h1>Home</h1>
        </Link>
        {/* <Link smooth to="/#about" scroll={scrollWithOffset}>
          <h1>About Me</h1>
        </Link> */}
        {/* <Link smooth to="/#experience" scroll={(el) => scrollWithOffset(el)}>
          <h1>Experience</h1>
        </Link> */}
        <Link smooth to="/#projects" scroll={scrollWithOffset}>
          <h1>Portfolio</h1>
        </Link>
        <Link smooth to="/#contact" scroll={scrollWithOffset}>
          <h1>Contact</h1>
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Header;
