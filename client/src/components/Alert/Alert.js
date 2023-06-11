import React from "react";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = function Alert({ show, onClose, severity, ...props }) {
  return (
    <Snackbar autoHideDuration={3000} open={show} onClose={onClose}>
      <MuiAlert elevation={2} severity={severity} variant="filled" {...props} />
    </Snackbar>
  );
};

export default Alert;
