import React, { useState, useEffect } from "react";

import PageTemplate from "../../components/PageTemplate";
// import PostContainer from "../../components/PostContainer";

// Data

// Component
import Loading from "../../components/Loading";
import PostContainer from "../../components/PostContainer";
import Sidebar from "../../components/Sidebar";
import SocialStack from "../../components/SocialStack";
import { getRepos } from "../../api/endpoints/github";

function Project({ repos }) {
  const [data, setData] = useState(repos);

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <PageTemplate title="Projects">
          <Sidebar />
          <PostContainer data={data} postType="project" />
          <SocialStack />
        </PageTemplate>
      )}
    </>
  );
}

export default Project;

export async function getStaticProps(context) {
  const repos = await getRepos();
  return {
    props: {
      repos,
    },
  };
}
