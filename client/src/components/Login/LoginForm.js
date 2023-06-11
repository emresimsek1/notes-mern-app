import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Alert, Grid } from "@mui/material";
import NotesImage from "../../image/logo.png";
import { Link } from "react-router-dom";
export default function LoginForm({
  buttonSubmit,
  loginFailed,
  postData,
  setPostData,
}) {
  return (
    <React.Fragment>
      <Grid
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
        }}
      >
        <img width={300} src={NotesImage} alt="notes"></img>
        <TextField
          sx={{ mt: 1 }}
          id="username"
          label="Username"
          variant="outlined"
          value={postData.username}
          onChange={(e) =>
            setPostData({ ...postData, username: e.target.value })
          }
        />

        <TextField
          sx={{ mt: 1 }}
          id="password"
          label="password"
          variant="outlined"
          type="password"
          value={postData.password}
          onChange={(e) =>
            setPostData({ ...postData, password: e.target.value })
          }
        />
        {loginFailed ? (
          <Alert severity="warning">
            Sorry, your password or username was incorrect.
          </Alert>
        ) : (
          ""
        )}
        <Button sx={{ mt: 1 }} onClick={buttonSubmit} variant="contained">
          Login
        </Button>
        <Grid item xs style={{ display: "flex" }}>
          <h4 style={{ marginRight: "5px" }}>Don't have an account?</h4>
          <h4>
            <Link to={"/signup"}>Sign In</Link>
          </h4>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
