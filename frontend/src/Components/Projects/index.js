import { Wrapper, Content, HeadThingy } from "./Projects.styles";
import { Link } from "react-router-dom";

const Projects = (props) => (
  <>
    <HeadThingy id={props.id}>
      <h1>
        I like to work on projects in my spare time to improve my capacities.
        This is some stuff I've been working on recently.
      </h1>
    </HeadThingy>
    <Wrapper>
      <Content>
        <Link to="/musicapp" className="btn">
          Piano
        </Link>
        <h3>
          This is a piano. I'm a musician so I like learning about synthesizing
          sound and building music related apps. I originally wrote this with
          Vanilla JS and I then recently refactored it for React.
        </h3>
      </Content>
      <Content>
        <a
          href="https://www.mobileclothes.org"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Mobile Clothes
        </a>
        <h3>
          This is a site I recently created for a local charity that provides
          free clothing to immigrants in the Colorado Springs area. It's a
          portal that takes in requests for them.
        </h3>
      </Content>
      {/* <Content>
        <Link className="btn" to="/inspire">
          Inspirational Website
        </Link>

        <h3>
          Something simple made trying to learn React, with some of the free
          apis that are available online.
        </h3>
      </Content> */}
    </Wrapper>
  </>
);

export default Projects;
