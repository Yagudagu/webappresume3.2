const express = require("express");

const dotenv = require("dotenv");
const path = require("path");

const app = express();

// I think it pases JSON's or soemthing
app.use(express.json());

// Serving static files
app.use(express.static(path.join(__dirname, "frontend/build")));

// DOTENV
dotenv.config({ path: "./config.env" });

app.get("/", (req, res) => {
  //res.redirect("https://www.jacobmartinworld.com");
  res.writeHead(200, { "Content-type": "text/html" });
  // res.end(`
  // <html>
  //   <body>for the big money!!!!?!?!?!?! one more time, give me the good stuff</body>
  // </html>`);
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

// Cover all incase I make an api or something

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/build/index.html"));
});

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
