const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const randomQuotesRouter = require("./routes/random.quotes.js");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());

//random-quotes
app.use("/api/random-quotes", randomQuotesRouter);

//home
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

// route not found error
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});

//handling server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "something broke",
  });
});

module.exports = app;
