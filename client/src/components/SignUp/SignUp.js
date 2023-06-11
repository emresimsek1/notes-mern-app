import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { createAccount } from "../../actions/signUpAction";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
  const [postData, setPostData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAccount(postData));
    clear();
  };

  const clear = () => {
    setPostData({ username: "", password: "" });
  };
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <SignUpForm handleSubmit={handleSubmit} setPostData={setPostData} postData={postData}/>
    </Box>
  );
}
