import { Grid, Typography } from "@mui/material";
import React, {useState} from "react";
import axios from "axios";

const fetchHandler = async() => {
    return await axios.get("http://localhost:4000/all").then((res) => res.data);
}
const CardContainer = () => {
    const[taskList, setTaskList] = useState()
  return (
    <>
      <Grid container justifyContent="center">
        <Grid
          item
          xs={3}
          md={3}
          mx={2}
          className="bg-red-200 shadow-md h-[10rem] p-4"
        >
          <Typography variant="h6" fontWeight={"bold"} textAlign="center">
            Backlog
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          md={3}
          mx={2}
          className="bg-yellow-100 shadow-md h-[10rem] p-4"
        >
          <Typography variant="h6" fontWeight={"bold"} textAlign="center">
            In Progress
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          md={3}
          mx={2}
          
          className="bg-green-100 shadow-md h-[10rem] p-4"
        >
          <Typography variant="h6" fontWeight={"bold"} textAlign="center">
            Completed
          </Typography>
        </Grid>
      </Grid>
      {/* </div> */}
    </>
  );
};

export default CardContainer;
