import { Grid, Typography, Card } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const fetchHandler = async () => {
  return await axios.get("http://localhost:4000/all").then((res) => res.data);
};

const CardContainer = () => {
  const [tasks, setTasks] = useState();

  const getAllList = () => {
    fetchHandler().then((data) => {
      console.log(data.tasks);
      setTasks(data.tasks);
    });
  };

  useEffect(() => {
    getAllList();
  }, []);

  return (
    <>
      {/* <Grid container justifyContent="center">
        <Grid item xs={3} md={3} mx={2} className="bg-red-200 shadow-md p-4">
          <Typography variant="h6" fontWeight={"bold"} textAlign="center">
            Backlog
          </Typography>
          {tasks &&
            tasks.map((task) => (
              <Card key={task._id} sx={{my:1, p:1.5}}>
                {task.title}
              </Card>
            ))}
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
      </Grid> */}
      {/* </div> */}
      <DragDropContext>
        <Droppable>
          <Typography variant="h6" fontWeight={"bold"} textAlign="center">
            Backlog
          </Typography>
          {tasks &&
            tasks.map((task) => (
              <Draggable key={task._id}>{task.title}</Draggable>
            ))}
        </Droppable>
        <Droppable>
          <Typography variant="h6" fontWeight={"bold"} textAlign="center">
            In Progress
          </Typography>
        </Droppable>
        <Droppable>
          <Typography variant="h6" fontWeight={"bold"} textAlign="center">
            Completed
          </Typography>
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default CardContainer;
