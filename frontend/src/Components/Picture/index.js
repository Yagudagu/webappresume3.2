import react from "react";
import { Wrapper } from "./Picture.styles";

const Picture = (props) => {
  return <Wrapper src={props.string} alt="from space" />;
};

export default Picture;
