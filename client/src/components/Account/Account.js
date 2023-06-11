import * as React from "react";
import { useEffect, useState } from "react";
import Profile from "../ProfileMenu/ProfileMenu";
import { Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { updatePass } from "../../actions/changePasswordAction";
import logo from "../../image/logo.png";
import { useSelector } from "react-redux";
import AccountInput from "./AccountInput";
import { GridStyle, GridFromStyle, FromStyle } from "./Account.style";

const Account = () => {
  const dispatch = useDispatch();
  const storeUser = useSelector((state) => state.user);
  const objectId = useSelector((state) => state.user._id);

  useEffect(() => {
    setUser(storeUser);
  }, [storeUser]);

  const [checkPassword, setCheckPassword] = useState({
    password: "",
    passwordAgain: "",
    IsEqual: false,
  });
  const [user, setUser] = useState({
    username: "",
    password: "",
    _id: "",
    userId: "",
  });
  const handleSubmit = (e) => {
    if (user.password === checkPassword.password) {
      dispatch(updatePass(objectId, user));
      clear();
    } else {
      setCheckPassword({ ...checkPassword, IsEqual: true });
    }
  };

  const clear = () => {
    setCheckPassword({ password: "", passwordAgain: "", IsEqual: false });
  };

  return (
    <React.Fragment>
      <Grid item xs style={GridStyle}>
        <img alt="" src={logo} height={"80px"}></img>
        <Profile dispatch={dispatch} />
      </Grid>
      <Grid item xs style={GridFromStyle}>
        <Grid item xs style={FromStyle}>
          <AccountInput
            checkPassword={checkPassword}
            setCheckPassword={setCheckPassword}
            setUser={setUser}
            user={user}
          ></AccountInput>
          <Button sx={{ mt: 1 }} variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Account;
