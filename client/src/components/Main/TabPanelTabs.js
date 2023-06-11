import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AddIcon from "@mui/icons-material/Add";
const TabPanelTabs = ({ value, handleChange, post }) => {
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  const addTab =
    post.length > 0
      ? post.map((result, index) => {
          return <Tab key={index} label={result.title} {...a11yProps(index)} />;
        })
      : "";
  return (
    <Tabs
      orientation={
        window.matchMedia("(max-width: 700px)").matches ? "novertical" : "vertical"
      }
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      sx={{ width: "100%", borderRight: 1, borderColor: "divider" }}
    >
      {addTab}
      <Tab label={<AddIcon />} {...a11yProps(post.length)} />;
    </Tabs>
  );
};
export default TabPanelTabs;
