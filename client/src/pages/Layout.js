import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import { useNavigate } from "react-router-dom";
import { clearInfo } from "../actions/appAction";
import Alert from "../components/Alert/Alert";
import { loginUser } from "../actions/loginAction";

const Layout = () => {
  const userLocalStorage = localStorage.getItem("user");
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowInfo(false);
    dispatch(clearInfo());
  };

  const history = useNavigate();
  const userState = useSelector((state) => state.user);
 
  useEffect(() => {
    if (userLocalStorage !== null) {
      dispatch(
        loginUser(
          JSON.parse(userLocalStorage).username,
          JSON.parse(userLocalStorage).password
        )
      );
      history("/home");
    } else {
      history("/login");
    }
    if (userState.login) {localStorage.setItem("user", JSON.stringify(userState));
    } 
  }, [userState, history, userLocalStorage, dispatch]);

  const [showInfo, setShowInfo] = useState(false);
  const infoData = useSelector((state) => state.app.info);

  useEffect(() => {
    const infoState = infoData.message !== "";
    setShowInfo(infoState);
  }, [infoData.message]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
 
      <Outlet />

      {infoData.type !== "" ? (
        <Alert severity={infoData.type} show={showInfo} onClose={handleClose}>
          {infoData.message}
        </Alert>
      ) : (
        ""
      )}
    </div>
  );
};

export default Layout;
