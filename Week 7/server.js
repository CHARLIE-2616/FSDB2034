const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Your routes here
app.post('/tasks', (req, res) => {
    // Handle the task creation
    res.send('Task added');
});

mongoose.connect('mongodb://localhost:27017/student_tasks', { useNewUrlParser: true, useUnifiedTopology: true });

const TaskSchema = new mongoose.Schema({
    courseId: String,
    taskName: String,
    dueDate: Date,
    details: String
});

const Task = mongoose.model('Task', TaskSchema);

app.post('/tasks', async (req, res) => {
    const { courseId, taskName, dueDate, details } = req.body;
    const task = new Task({ courseId, taskName, dueDate, details });
    await task.save();
    res.status(201).send(task);
});

app.get('/courses/:courseId/tasks', async (req, res) => {
    const tasks = await Task.find({ courseId: req.params.courseId });
    if (tasks.length === 0) {
        return res.status(404).send({ message: 'No tasks found for this course' });
    }
    res.send(tasks);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

app.get('/courses/:courseId/tasks', async (req, res) => {
  const courseId = req.params.courseId;
  const tasks = await Task.find({ courseId });

  if (!tasks.length) {
      return res.status(404).send('No tasks found for this course.');
  }

  res.json(tasks);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
