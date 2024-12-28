const express = require('express');
const NotToDo = require('./models/NotToDo');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Middleware to verify token
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(403).json({ message: 'Access denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

// Get all tasks
router.get('/', authMiddleware, async (req, res) => {
    const tasks = await NotToDo.find({ user: req.user.id });
    res.status(200).json(tasks);
});

// Add a new task
router.post('/', authMiddleware, async (req, res) => {
    const { task } = req.body;
    const newTask = new NotToDo({ user: req.user.id, task });
    await newTask.save();
    res.status(201).json(newTask);
});

// Update a task
router.put('/:id', authMiddleware, async (req, res) => {
    const { task, completed } = req.body;
    const updatedTask = await NotToDo.findByIdAndUpdate(req.params.id, { task, completed }, { new: true });
    res.status(200).json(updatedTask);
});

// Delete a task
router.delete('/:id', authMiddleware, async (req, res) => {
    await NotToDo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Task deleted successfully' });
});

module.exports = router;
