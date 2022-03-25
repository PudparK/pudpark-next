export async function getQuotes() {
  const url = "https://api.airtable.com/v0/appi2Mewwf5NR5VR6/pk_quotes";

  const opts = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
  };

  const res = await fetch(url, opts);
  const quotes = await res.json();

  return quotes;
}
