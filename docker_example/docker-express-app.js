const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", (request, response) => {
    response.send("unhandled endpoint please try /dad-joke");
});

app.get("/dad-joke", (request, response) => {
  console.log("Got request: ", request.headers)
  axios
    .get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
    .then((icanhazdadjokeResponse) => {
      response.json(icanhazdadjokeResponse.data);
    });
});

console.log("listening on port 8000");
app.listen(8000);
