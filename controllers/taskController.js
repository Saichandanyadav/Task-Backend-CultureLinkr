const Task = require('../models/taskModel');

// Get all tasks
const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// Create a new task
const createTask = async (req, res) => {
  const { title } = req.body;
  const task = new Task({ title });
  await task.save();
  res.json(task);
};

// Update a task
const updateTask = async (req, res) => {
  const { id } = req.params;
  const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedTask);
};

// Delete a task
const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.json({ message: 'Task deleted' });
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
