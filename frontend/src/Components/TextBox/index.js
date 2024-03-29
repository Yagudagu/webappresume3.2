import React from "react";

import { Wrapper, Content, Picture, PicWrap } from "./TextBox.styles";

import myPicture from "../Public/forResumePhoto.png";
import one from "../Public/frone.jpeg";
import two from "../Public/frtwo.jpg";
import three from "../Public/frthree.jpg";
import four from "../Public/frfour.jpg";

const TextBox = (props) => {
  return (
    <Wrapper id={props.id}>
      <Content>
        {/* <h1 className="firstone">Jacob Martin</h1> */}
        <h1>Senior Cloud Support Engineer</h1>
        <p>
          Welcome, my name is Jacob Martin and I'm a Cloud Engineer for OCI and
          I also make websites in my free time. I'm interested software
          engineering jobs, so please check out my resume and some of my other
          work below. You'd be a fool not to pick me!
        </p>
      </Content>
      <div id="pictureOfMe">
        <PicWrap>
          <Picture
            className=""
            src={myPicture}
            alt="me in an open field hiking."
          />
          <Picture
            className=""
            src={three}
            alt="another selfie, enough is enough!"
          />
          <Picture className="fit" src={one} alt="me in front of a statue" />
          <Picture
            className="wider"
            src={two}
            alt="me in front of a nice view"
          />
          <Picture className="fit" src={four} alt="how vain is this man?" />
        </PicWrap>
      </div>
    </Wrapper>
  );
};

export default TextBox;
