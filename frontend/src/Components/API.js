const nasaKey = "fhFbJcqKh59egUPryN8FCr5bkLciRtBBFyXneaF4";
const randomDate =
  "2020-" +
  Math.floor(Math.random() * 11 + 1).toString() +
  "-" +
  Math.floor(Math.random() * 28).toString();

export const picture = async () => {
  return await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}&date=${randomDate}`
  ).json();
};

export const quote = async () => {
  return await (await fetch(`https://api.kanye.rest/`)).json();
};
