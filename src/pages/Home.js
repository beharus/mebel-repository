import React from "react";
import LatestPublic from "../components/latestPublic";
import New from "../components/new/New";

function Home() {
  return (
    <div className="home container">
      <New />
      <LatestPublic />
    </div>
  );
}

export default Home;
