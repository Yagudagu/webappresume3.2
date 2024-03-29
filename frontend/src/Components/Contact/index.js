import { Wrapper, Content } from "./Contact.styles";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = (props) => (
  <Wrapper id={props.id}>
    <Content>
      <a
        className="con_box"
        href="https://www.linkedin.com/in/jacob-martin-416a33185/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="linked_in icon" />
        <div>Message me on linked in</div>
      </a>
      <a
        className="con_box"
        href="https://github.com/Yagudagu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="icon" />
        <div>Check out my Github</div>
      </a>
      <a
        href="mailto:jacobhertzermartin@gmail.com"
        className="con_box"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdOutlineEmail className="icon" />
        <div>Email me</div>
      </a>
    </Content>
  </Wrapper>
);

export default Contact;
