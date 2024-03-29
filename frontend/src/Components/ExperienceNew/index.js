import React, { useState } from "react";
import { Wrapper } from "./ExperienceNew.styles";
import { CaretDownOutline, CaretForwardOutline } from "react-ionicons";

export const ExperienceNew = ({ id }) => {
  const [aboutMe, setAboutMe] = useState(true);
  const [workExperience, setWorkExperience] = useState(true);
  const [technologies, setTechnologies] = useState(true);
  const [education, setEducation] = useState(false);

  return (
    <Wrapper id={id}>
      {workExperience ? (
        <div id="unexpanded">
          <CaretForwardOutline
            color={"#1c1c1c"}
            onClick={() => setWorkExperience(!workExperience)}
          />
          <div>Experience</div>
        </div>
      ) : (
        <div id="unexpanded">
          <CaretDownOutline
            color={"#1c1c1c"}
            onClick={() => setWorkExperience(!workExperience)}
          />
          <div>
            <div>Experience</div>
            <ul>
              <li>
                Tier 3 Technical Support Engineer for PaaS services on Microsoft
                Azure (2021 March – current){" "}
              </li>
              <li>
                Technical Lead/Support Engineer for Microsoft Teams/M365 Premier
                Support (Feb 2020 – March 2021)
              </li>
              <li>
                Community Development Worker and Coordinator, Eastern Congo
                (DRC) (Feb 2016 – June 2019)
              </li>
            </ul>
          </div>
        </div>
      )}
      {aboutMe ? (
        <div id="unexpanded">
          <CaretForwardOutline
            color={"#1c1c1c"}
            onClick={() => setAboutMe(!aboutMe)}
          />
          <div>About Me</div>
        </div>
      ) : (
        <div id="unexpanded">
          <CaretDownOutline
            color={"#1c1c1c"}
            onClick={() => setAboutMe(!aboutMe)}
          />
          <div>
            <div>About Me</div>
            <br />
            <p>Here are some words about my work.</p>
          </div>
        </div>
      )}
      {technologies ? (
        <div id="unexpanded">
          <CaretForwardOutline
            color={"#1c1c1c"}
            onClick={() => setTechnologies(!technologies)}
          />
          <div>Technologies I Know</div>
        </div>
      ) : (
        <div id="unexpanded">
          <CaretDownOutline
            color={"#1c1c1c"}
            onClick={() => setTechnologies(!technologies)}
          />
          <div>
            <div>Technologies I Know</div>
            <br />
            <p>Here are some words about my work.</p>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default ExperienceNew;
