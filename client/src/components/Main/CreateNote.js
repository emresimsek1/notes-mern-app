import * as React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { createPost } from "../../actions/postAction";

const Test = ({
  value,
  postData,
  setCreateNote,
  createNote,
  setValue,
  TabPanel,
  dispatch,
}) => {
  return (
    <TabPanel value={value} index={postData.length} style={{ width: "100%" }}>
      <TextField
        variant="standard"
        fullWidth
        label="header"
        id="fullWidth"
        style={{ paddingBottom: "1rem" }}
        value={createNote.title}
        onChange={(e) => {
          setCreateNote({ ...createNote, title: e.target.value });
        }}
      />
      <TextField
        id="standard-multiline-static"
        label="Note"
        variant="standard"
        multiline
        rows={11}
        fullWidth
        style={{ paddingBottom: "1rem" }}
        value={createNote.note}
        onChange={(e) => {
          setCreateNote({ ...createNote, note: e.target.value });
        }}
      />
      <Button
        sx={{ mr: 1 }}
        variant="contained"
        onClick={() => {
          value !== 0 ? setValue(value - 1) : setValue(value);
          dispatch(createPost(createNote));
          setCreateNote({ ...createNote, note: "", title: "" });
        }}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          setCreateNote({ ...createNote, note: "", title: "" });
        }}
      >
        Clear
      </Button>
    </TabPanel>
  );
};

export default Test;
