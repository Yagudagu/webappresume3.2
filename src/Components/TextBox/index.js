import React from "react";

import { Wrapper, Content, Picture } from "./TextBox.styles";

import myPicture from "../Public/forResumePhoto.png";

const TextBox = (props) => {
  return (
    <Wrapper id={props.id}>
      <Content>
        <h1 className="firstone">Jacob Martin</h1>

        <h2>Technical Support Engineer / Web Developer</h2>
      </Content>
      <div id="pictureOfMe">
        <Picture src={myPicture} />
        {/* <p id="photo">
          A photo hiking just outside Nairobi a few years ago. I like to spend
          time outside in my off hours, and hiking is one of my favorite
          activites.{" "}
        </p> */}
      </div>
    </Wrapper>
  );
};

export default TextBox;
