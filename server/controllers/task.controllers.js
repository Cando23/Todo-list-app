const taskServices = require("../services/task.services");
const filterByStatus = async (req, res) => {
  const userId = req.userId;
  const taskStatus = req.query.status;
  const todoList = await taskServices.filterTodoList(taskStatus, userId);
  res.send(todoList);
};
const createTask = async (req, res) => {
  const taskInfo = {
    date: req.body.date,
    title: req.body.title,
    status: "In Progress",
    description: req.file?.filename,
    user: req.userId,
  };
  const result = await taskServices.createTask(taskInfo);
  if (result) res.status(200).send("Task created!");
  else res.status(400).send("Wrong input, try again!");
};
const downloadFile = async (req, res) => {
  const file = await taskServices.downloadFile(req.params.id);
  res.download(file.path, file.name);
};
const getTaskById = async (req, res) => {
  const task = await taskServices.getTaskById(req.params.id);
  res.send(task);
};
const updateTask = async (req, res) => {
  const task = {
    title: req.body.title,
    status: req.body.status,
    description: req.file?.filename,
  };
  const result = await taskServices.updateTask(task, req.params.id, req.userId);
  if (result) res.status(200).send("Task changed!");
  else res.status(400).send("Wrong input, try again!");
};
module.exports = {
  filterByStatus,
  createTask,
  downloadFile,
  getTaskById,
  updateTask,
};
