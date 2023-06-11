import * as React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { updatePost, deletePost } from "../../actions/postAction";

const GetNote = ({
  post,
  value,
  TabPanel,
  postData,
  setPostData,
  setValue,
  dispatch,
}) => {
  const renderPost =
    post.length > 0
      ? post.map((result, index) => {
          return (
            <TabPanel key={index} value={value} index={index} style={{ width: "100%" }}>
              <TextField
                variant="standard"
                fullWidth
                label="header"
                id="fullWidth"
                style={{ paddingBottom: "1rem" }}
                value={postData[index] ? postData[index].title : ""}
                onChange={(e) => {
                  setPostData((postData) => {
                    const newArea = postData.map((singleArea, areaIndex) => {
                      if (areaIndex === index) {
                        return { ...postData[index], title: e.target.value };
                      }

                      return singleArea;
                    });

                    return newArea;
                  });
                }}
              />
              <TextField
                variant="standard"
                id="outlined-multiline-static"
                label="Note"
                multiline
                rows={11}
                fullWidth
                style={{ paddingBottom: "1rem" }}
                value={postData[index] ? postData[index].note : ""}
                onChange={(e) => {
                  setPostData((postData) => {
                    const newArea = postData.map((singleArea, areaIndex) => {
                      if (areaIndex === index) {
                        return { ...postData[index], note: e.target.value };
                      }

                      return singleArea;
                    });

                    return newArea;
                  });
                }}
              />
              <Button
                sx={{ mr: 1 }}
                variant="contained"
                onClick={() => {
                  dispatch(updatePost(result._id, postData[index]));
                }}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  dispatch(deletePost(result._id));
                  value !== 0 ? setValue(value - 1) : setValue(value);
                }}
              >
                Delete
              </Button>
            </TabPanel>
          );
        })
      : "";
  return <React.Fragment>{renderPost}</React.Fragment>;
};
export default GetNote;
