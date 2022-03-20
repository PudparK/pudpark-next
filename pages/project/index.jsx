import React, { useState, useEffect } from "react";

import PageTemplate from "../../component/PageTemplate";
// import PostContainer from "../../component/PostContainer";

// Data
import fetchData from "util/netReq";

// Component
import Loading from "../../component/Loading";
import PostContainer from "../../component/PostContainer";
import Sidebar from "../../component/Sidebar";
import SocialStack from "../../component/SocialStack";

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
