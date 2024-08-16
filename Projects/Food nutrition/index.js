const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Food = require('./models/Food');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/food-nutrition', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// CRUD Routes
// Create a new food item
app.post('/foods', async (req, res) => {
    try {
        const food = new Food(req.body);
        await food.save();
        res.status(201).json(food);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all food items
app.get('/foods', async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).json(foods);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a specific food item by ID
app.get('/foods/:id', async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) return res.status(404).json({ error: 'Food item not found' });
        res.status(200).json(food);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a food item by ID
app.put('/foods/:id', async (req, res) => {
    try {
        const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!food) return res.status(404).json({ error: 'Food item not found' });
        res.status(200).json(food);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a food item by ID
app.delete('/foods/:id', async (req, res) => {
    try {
        const food = await Food.findByIdAndDelete(req.params.id);
        if (!food) return res.status(404).json({ error: 'Food item not found' });
        res.status(200).json({ message: 'Food item deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});