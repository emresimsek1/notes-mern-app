import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../actions/logoutAction";
import SettingsIcon from "@mui/icons-material/FaceRetouchingNatural";
import { BoxStyle } from "./ProfileMenu.style";
import MenuChild from "./MenuChild";

export default function ProfileMenu({ dispatch }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(logout());
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useNavigate();
  const handleAccount = () => {
    setAnchorEl(null);
    history("/account");
  };

  return (
    <React.Fragment>
      <Box sx={BoxStyle}>
        <Link to={"/home"}>Home</Link>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <SettingsIcon sx={{ width: 50, height: 50 }}></SettingsIcon>
          </IconButton>
        </Tooltip>
      </Box>

      <MenuChild
        anchorEl={anchorEl}
        handleAccount={handleAccount}
        handleLogout={handleLogout}
        handleClose={handleClose}
      />
    </React.Fragment>
  );
}
