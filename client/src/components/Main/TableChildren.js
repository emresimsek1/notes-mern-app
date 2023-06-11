import * as React from "react";
import Tab from "@mui/material/Tab";
import AddIcon from "@mui/icons-material/Add";
const TableChildren = ({ post, a11yProps }) => {
  
  const addTab =
    post.length > 0
      ? post.map((result, index) => {
          return <Tab label={result.title} {...a11yProps(index)} />;
        })
      : "";

  return (
    <React.Fragment>
      {addTab}
      <Tab label={<AddIcon />} {...a11yProps(post.length)} />;
    </React.Fragment>
  );
};
export default TableChildren;
