import React, { useState, useEffect } from "react";

// import styles from "./styles.module.scss";

// Components
import Loading from "../../components/Loading";
import PageTemplate from "../../components/PageTemplate";
import PostContainer from "../../components/PostContainer";
import SocialStack from "../../components/SocialStack";
import Sidebar from "../../components/Sidebar";

//Data
import { getBlogPosts } from "../../api/endpoints/devto";

function Blog({ posts }) {
  return (
    <>
      {!posts ? (
        <Loading />
      ) : (
        <PageTemplate title="Blog">
          <Sidebar />
          <PostContainer data={posts} postType="blog" />
          <SocialStack />
        </PageTemplate>
      )}
    </>
  );
}

export async function getStaticProps(context) {
  const posts = await getBlogPosts();
  return {
    props: { posts }, // will be passed to the page component as props
  };
}

export default Blog;
