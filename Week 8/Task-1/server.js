// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/student_tasks')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });


// Define the Task schema
const taskSchema = new mongoose.Schema({
    courseId: String,
    taskName: String,
    dueDate: String,
});

// Create a model for Task
const Task = mongoose.model('Task', taskSchema);

// Route to add a new task
app.post('/addTask', async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(200).send('Task added successfully');
    } catch (err) {
        res.status(500).send('Error adding task: ' + err.message);
    }
});

// Route to retrieve tasks for a specific course by courseId
app.get('/courses/:courseId/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({ courseId: req.params.courseId });
        if (tasks.length > 0) {
            res.status(200).json(tasks);
        } else {
            res.status(404).send('No tasks found for this course');
        }
    } catch (err) {
        res.status(500).send('Error retrieving tasks: ' + err.message);
    }
});

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find(); // Fetch all tasks without filtering
        if (tasks.length > 0) {
            res.status(200).json(tasks);
        } else {
            res.status(404).send('No tasks found');
        }
    } catch (err) {
        res.status(500).send('Error retrieving tasks: ' + err.message);
    }
});

// Serve the frontend HTML file at the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
