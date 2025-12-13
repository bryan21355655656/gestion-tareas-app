const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3002;

app.use(express.json());
app.use(cors());

// Simulación de Base de Datos
let tasks = [
    { id: 1, title: 'Aprender Microservicios', userId: 1, completed: false }
];

// GET: Obtener tareas
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// POST: Crear tarea
app.post('/api/tasks', (req, res) => {
    const { title, userId } = req.body;
    if (!title || !userId) {
        return res.status(400).json({ message: 'Titulo y ID de usuario requeridos' });
    }
    const newTask = { 
        id: tasks.length + 1, 
        title, 
        userId: parseInt(userId), 
        completed: false 
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// PUT: Actualizar estado de tarea
app.put('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === id);
    
    if (taskIndex > -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        res.json(tasks[taskIndex]);
    } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
    }
});

// DELETE: Eliminar tarea
app.delete('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== id);
    res.status(200).json({ message: 'Tarea eliminada' });
});

app.listen(PORT, () => {
    console.log(`Tareas-Service corriendo en http://localhost:${PORT}`);
});