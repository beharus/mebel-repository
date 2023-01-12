import React from "react";
import { useSelector } from "react-redux";
import Main from "../components/main";
import IndivMebel from "../components/indivMebel";
import Error from "../components/error";
import Loader from "../components/loader";
import AboutHistory from "../components/aboutHistory";
import LatestPublic from "../components/latestPublic";
import New from "../components/new/New";
import Contact from "../components/contact";
import AboutEkmiMebel from "../components/aboutEkmiMebel";
import Partner from "../components/partner";

function Home() {
  const { catalogLoading } = useSelector((state) => state.catalog);

  return (
    <div className="home">
      {catalogLoading === "loading" ? (
        <Loader />
      ) : catalogLoading === "error" ? (
        <Error />
      ) : (
        <>
          <Main />
          <New />
          <IndivMebel />
          <AboutHistory />
          <LatestPublic />
          <Contact />
          <AboutEkmiMebel />
          <Partner />
        </>
      )}
    </div>
  );
}

export default Home;
