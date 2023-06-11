import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItems from "./MenuItems";
import { PaperPropsStyle } from "./ProfileMenu.style";

const MenuChild = ({ handleAccount, handleLogout, anchorEl ,handleClose}) => {
  const open = Boolean(anchorEl);
  return (
    <React.Fragment>
      <Menu
        anchorEl={anchorEl}
        open={open}
        id="account-menu"
        onClose={handleClose}
        PaperProps={PaperPropsStyle}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItems handleLogout={handleLogout} handleAccount={handleAccount} />
      </Menu>
    </React.Fragment>
  );
};
export default MenuChild;
