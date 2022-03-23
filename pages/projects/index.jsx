import React, { useState, useEffect } from "react";

import PageTemplate from "../../components/PageTemplate";
// import PostContainer from "../../components/PostContainer";

// Data
import fetchData from "../../util/netReq";

// Component
import Loading from "../../components/Loading";
import PostContainer from "../../components/PostContainer";
import Sidebar from "../../components/Sidebar";
import SocialStack from "../../components/SocialStack";

function Project() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData("/.netlify/functions/api/github").then((data) => setData(data));
    }, 1200);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

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
