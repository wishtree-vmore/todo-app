import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";

const AddTask = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="container">
        <h1 className="text-3xl font-bold text-center">To Do List</h1>
        <Box textAlign='center' sx={{m:5}}>
          <Button
            className="w-24"
            style={{ backgroundColor: "#59a5d8" }}
            variant="contained"
            onClick={() => setOpen(true)}
          >
            Add
          </Button>
        </Box>

        <div className="container"></div>
        <Dialog open={open}>
          <DialogTitle>Add Task</DialogTitle>
          <DialogContent>
            <TextField autoFocus label="Title" />
            <br />
            <br />
            <TextField autoFocus label="Description" />
            <br />
            <br />
            <Button
              className="w-24 self-center"
              style={{ backgroundColor: "#59a5d8", marginRight: "10px" }}
              variant="contained"
            >
              Add
            </Button>
            <Button
              className="w-24 self-center"
              style={{ backgroundColor: "#e54b4b" }}
              variant="contained"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default AddTask;
