const Todo = require("../models/todo.model");

exports.addNew = async (req, res, next) => {
  const { title, description } = req.body; //req.body contains all of these field and we are destructuring this field from req.body so it contains all of the functionalities.
  let task;
  try {
    task = new Todo({
      //it will create a new instance of listSchema which we have built
      title,
      description,
    });
    await task.save();
  } catch (err) {
    console.log(err, "Something error");
  }
  if (!task) {
    return res.status(500).json({ message: "Unable to add task!" });
  }
  return res.status(201).json({ message: "Task Successfully Added ." });
};

exports.getAll = async (req, res) => {
  let tasks;
  try {
    tasks = await Todo.find();
  } catch (err) {
    console.log(err);
  }

  if (!tasks) {
    return res.status(404).json({ message: "No Tasks found!" });
  }
  return res.status(200).json({ tasks }); //else statement
};

exports.getById = async (req, res, next) => {
  const id = req.params.bookId; //params gets id from url
  let task;
  try {
    task = await Todo.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!task) {
    return res.status(404).json({ message: "No task found!" });
  }
  return res.status(200).json({ task });
};

exports.update = async (req, res, next) => {
  const id = req.params.taskId;
  const { title, description} = req.body;
  let task;
  try {
    task = await Todo.findByIdAndUpdate(id, {
      title,
      description
    });
    task = await task.save();
  } catch (err) {
    console.log(err);
  }

  if (!task) {
    return res.status(400).json({ message: "Unable to update task!" });
  }
  return res.status(200).json({ message: "Task Successfully Updated ." });
};

exports.delete = async (req, res, next) => {
  const id = req.params.id;
  let task;
  try {
    task = await Todo.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }

  if (!task) {
    return res.status(404).json({ message: "No task found" });
  }
  return res.status(200).json({ message: "Task Successfully Deleted " });
};
