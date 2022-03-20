// Express
const express = require("express");
const app = express();

// Netlify Serverless
const serverless = require("serverless-http");

// Fetch API
const fetch = require("node-fetch");

// Environmental Variables
require("dotenv").config();

// API Calls
const devTo = require("./endpoints/devto");
const github = require("./endpoints/github");
const airtable = require("./endpoints/airtable");

const router = express.Router();

router.get("/devto", (req, res) => {
  fetch(devTo.url, devTo.opts)
    .then((res) => res.json())
    .then((data) => res.send(data))
    .catch(console.error);
});

router.get("/github", (req, res) => {
  fetch(github.url, github.opts)
    .then((res) => res.json())
    .then((data) => res.send(data))
    .catch(console.error);
});

router.get("/airtable", (req, res) => {
  fetch(airtable.url, airtable.opts)
    .then((res) => res.json())
    .then((data) => res.send(data))
    .catch(console.error);
});

app.use("/.netlify/functions/api", router); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
