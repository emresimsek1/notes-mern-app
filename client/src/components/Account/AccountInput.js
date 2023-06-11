import * as React from "react";
import TextField from "@mui/material/TextField";
import { Alert } from "@mui/material";

const AccountInput = ({ checkPassword, setCheckPassword, user, setUser }) => {
  return (
    <React.Fragment>
      <TextField
        disabled
        sx={{ mt: 1 }}
        id="username"
        label="Username"
        variant="outlined"
        value={user.username}
      />

      <TextField
        sx={{ mt: 1 }}
        id="password"
        label="New password"
        type="password"
        variant="outlined"
        value={checkPassword.password}
        onChange={(e) =>
          setCheckPassword({ ...checkPassword, password: e.target.value })
        }
      />

      <TextField
        sx={{ mt: 1 }}
        id="passwordagain"
        label="Again new password"
        type="password"
        variant="outlined"
        value={checkPassword.passwordAgain}
        onChange={(e) => {
          setCheckPassword({ ...checkPassword, passwordAgain: e.target.value });
          setUser({ ...user, password: e.target.value });
        }}
      />
      {checkPassword.IsEqual ? (
        <Alert severity="warning">The passwords doesn't match</Alert>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};
export default AccountInput;
