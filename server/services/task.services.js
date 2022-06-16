const Task = require("../models/Task");
const { isDateValid } = require("../utils/validators.utils");
const { removeTimeStamp } = require("../utils/convertors.utils");
const ObjectId = require("mongoose").Types.ObjectId;
const updateStatuses = (dbList) => {
  return dbList.map(async (task) => {
    if (!isDateValid(task.date) && task.status !== "Completed") {
      task.status = "Failed";
      await Task.findByIdAndUpdate(task._id, task);
    }
    return task;
  });
};
const viewList = (dbList) => {
  return dbList.map((task) => {
    let viewTask = JSON.parse(JSON.stringify(task));
    viewTask.date = new Date(viewTask.date).toLocaleDateString();
    viewTask.description = removeTimeStamp(viewTask.description);
    return viewTask;
  });
};
const filterTodoList = async (taskStatus, userId) => {
  let dbList = await Task.find({ user: userId });
  dbList = await Promise.all(updateStatuses(dbList));
  let todoList = dbList;
  if (taskStatus !== "All")
    todoList = dbList.filter((task) => task.status === taskStatus);
  return viewList(todoList);
};
const createTask = async (taskInfo) => {
  if (!isDateValid(taskInfo.date)) return false;
  else {
    const task = new Task(taskInfo);
    try {
      await task.save();
      return true;
    } catch (error) {
      return false;
    }
  }
};
const downloadFile = async (id) => {
  const task = await Task.findById(id);
  const filename = task.description;
  return {
    path: `./uploads/${filename}`,
    name: removeTimeStamp(filename),
  };
};
const getTaskById = async (id) => {
  const task = await Task.findById(id);
  task.description = removeTimeStamp(task.description);
  return task;
};
const updateTask = async (task, id, userId) => {
  try {
    const dbTask = await Task.findById(id);
    if (dbTask.user.toString() !== userId) return false;
    await dbTask.updateOne(task);
    return true;
  } catch (error) {
    return false;
  }
};
module.exports = {
  filterTodoList,
  createTask,
  downloadFile,
  getTaskById,
  updateTask,
};
