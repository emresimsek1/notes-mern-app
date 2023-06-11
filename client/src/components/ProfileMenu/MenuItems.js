import * as React from "react";
import Avatar from "@mui/material/Avatar"; 
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
 
export default function MenuItems({ handleAccount ,handleLogout}) {
 
  return (
    <React.Fragment>
      <MenuItem onClick={handleAccount}>
        <Avatar /> My account
      </MenuItem>
      <Divider />

      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </React.Fragment>
  );
}
