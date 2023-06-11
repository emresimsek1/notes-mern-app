import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { loginUser } from "../../actions/loginAction";
import LoginForm from "./LoginForm";
export default function Login() {
  const [postData, setPostData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const buttonSubmit = (e) => {
    dispatch(loginUser(postData.username, postData.password));
  };

  const loginFailed = useSelector((state) => state.user.loginFailed);

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      noValidate
      autoComplete="off"
    >
      <LoginForm
        buttonSubmit={buttonSubmit}
        loginFailed={loginFailed}
        postData={postData}
        setPostData={setPostData}
      ></LoginForm>
    </Box>
  );
}
