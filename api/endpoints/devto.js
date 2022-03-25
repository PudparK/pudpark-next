export async function getBlogPosts() {
  const url = "https://dev.to/api/articles/me/published";

  const opts = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.DEVTO_TOKEN,
    },
  };

  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(url, opts);
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return posts;
}
