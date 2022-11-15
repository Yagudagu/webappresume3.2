import react from "react";
import { Wrapper } from "./Video.styles";

const Video = (props) => {
  return (
    <Wrapper src={props.string} type="video" title="space" allowFullScreen />
  );
};

export default Video;
