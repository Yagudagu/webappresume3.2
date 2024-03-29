import { Wrapper, Content } from "./Projects.styles";

const Projects = (props) => (
  <>
    <Wrapper id={props.id}>
      <Content>
        <a
          href="https://objectstorage.us-phoenix-1.oraclecloud.com/p/8mE5fZ7Nk7GCgv3dO8CDTtFxbgvvXINUavIiG7z-GF8gHDZzzgrKuovlHiZ6XeG4/n/axwwwwm69s0m/b/jacobs-bucket/o/Jacob%20Martin%20Resume%202023%20Nov.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rez_button"
        >
          Download my resume
        </a>
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
          This is a site that I built and maintain for a local charity that my
          mom works with in Colorado Springs. It's an order form and I'm also
          build an admin portal with a database catalog for them.
        </h3>
      </Content>
    </Wrapper>
  </>
);

export default Projects;
