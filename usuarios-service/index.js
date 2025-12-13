const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors()); // Permite peticiones desde Angular

// Simulación de Base de Datos
let users = [
    { id: 1, name: 'Juan Perez', email: 'juan@test.com' },
    { id: 2, name: 'Maria Lopez', email: 'maria@test.com' }
];

// GET: Obtener usuarios
app.get('/api/users', (req, res) => {
    res.json(users);
});

// POST: Crear usuario
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    // Validación básica
    if (!name || !email) {
        return res.status(400).json({ message: 'Nombre y email requeridos' });
    }
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(PORT, () => {
    console.log(`Usuarios-Service corriendo en http://localhost:${PORT}`);
});