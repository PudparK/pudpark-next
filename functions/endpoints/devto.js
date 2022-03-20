const url = "https://dev.to/api/articles/me/published";

const opts = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "api-key": process.env.DEVTO_TOKEN,
  },
};

module.exports = {
  url,
  opts,
};
