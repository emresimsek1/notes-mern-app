import React from "react";
import { useSelector } from "react-redux";
import MainPage from "../components/Main/MainPage";

const Home = () => {
  const getNote = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user);
  return (
    <React.Fragment>
      <MainPage post={getNote || []}  user={user}/>
    </React.Fragment>
  );
};

export default Home;
