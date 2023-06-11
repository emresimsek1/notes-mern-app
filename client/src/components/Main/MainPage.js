import * as React from "react";
import { useEffect, useState } from "react";
import Profile from "../ProfileMenu/ProfileMenu";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import logo from "../../image/logo.png";
import CreateNote from "./CreateNote";
import GetNote from "./GetNote";
import TabPanelTabs from "./TabPanelTabs";
import TabPanel from "./TabPanel.js";
import {
  TabPanelStyleMobile,
  TabPanelStyle,
  GridLogoStyle,
} from "./MainPage.style";

const VerticalTabs = ({ post, user }) => {
  useEffect(() => {
    setCreateNote({ ...createNote, userId: user.userId });
    if (Array.isArray(post)) {
      setPostData(post);
    } else {
      setPostData([]);
    }
  }, [user, post]);

  const [value, setValue] = React.useState(0);
  const [postData, setPostData] = useState([]);
  const [createNote, setCreateNote] = useState({
    title: "",
    note: "",
    userId: Number,
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Grid item xs style={GridLogoStyle}>
        <img alt="" src={logo} height={"80px"}></img>
        <Profile dispatch={dispatch} />
      </Grid>

      <Grid
        container
        spacing={2}
        style={
          window.matchMedia("(max-width: 700px)").matches
            ? TabPanelStyle
            : TabPanelStyleMobile
        }
      >
        <Grid
          item
          xs={window.matchMedia("(max-width: 700px)").matches ? 12 : 2.5}
        >
          <TabPanelTabs value={value} handleChange={handleChange} post={post} />
        </Grid>

        <Grid item xs>
          <GetNote
            post={post}
            value={value}
            postData={postData}
            setPostData={setPostData}
            setValue={setValue}
            TabPanel={TabPanel}
            dispatch={dispatch}
          />

          <CreateNote
            value={value}
            postData={postData}
            setCreateNote={setCreateNote}
            createNote={createNote}
            setValue={setValue}
            TabPanel={TabPanel}
            dispatch={dispatch}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default VerticalTabs;
