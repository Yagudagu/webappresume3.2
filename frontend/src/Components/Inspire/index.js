import React, { useState, useEffect, useMemo } from "react";
import { HashLink } from "react-router-hash-link";

import Video from "../Video";
import Picture from "../Picture";

import { Wrapper, Quote, Content } from "./Inspire.styles";

const nasaKey = "fhFbJcqKh59egUPryN8FCr5bkLciRtBBFyXneaF4";
const randomDate =
  "2020-" +
  Math.floor(Math.random() * 11 + 1).toString() +
  "-" +
  Math.floor(Math.random() * 27 + 1).toString();

export const Inspire = () => {
  const [quote, setQuote] = useState("");
  const [picture, setPicture] = useState();

  useEffect(() => {
    const setStuff = async () => {
      await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}&date=${randomDate}`
      )
        .then((response) => response.json())
        .then((data) => setPicture(data));

      await fetch(`https://api.kanye.rest/`)
        .then((response) => response.json())
        .then((data) => setQuote(data));
    };

    return setStuff();
  }, []);

  quote ? console.log(quote) : console.log("not quote yet");
  picture ? console.log(picture) : console.log("not yet");
  return (
    <>
      <Wrapper>
        <HashLink className="return-to-main" to="/">
          Back to the main site
        </HashLink>
        <Content>
          {quote ? <Quote>{quote.quote}</Quote> : <div>Loading</div>}
          <h2 id="signature">- Kanye West</h2>
          {picture ? (
            picture.media_type === "image" ? (
              <Picture string={picture.url} />
            ) : (
              <Video string={picture.url} />
            )
          ) : (
            <div>loading</div>
          )}{" "}
        </Content>
      </Wrapper>
    </>
  );
};
