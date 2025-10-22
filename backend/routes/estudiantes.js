const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los estudiantes
router.get('/', (req, res) => {
    db.query('SELECT * FROM estudiante', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Obtener un estudiante por documento
router.get('/:documento_identidad', (req, res) => {
    const doc = req.params.documento_identidad;
    db.query('SELECT * FROM estudiante WHERE documento_identidad = ?',
        [doc], (err, results) => {
            if (err) return res.status(500).json({ error: err });
            if (results.length === 0)
                return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
            res.json(results[0]);
        });
});

// CREAR un nuevo estudiante
router.post('/', (req, res) => {
    const { documento_identidad, nombre, apellido, email, telefono, fecha_nacimiento } = req.body;
    
    // Validación básica
    if (!documento_identidad || !nombre || !apellido) {
        return res.status(400).json({ 
            mensaje: 'Documento, nombre y apellido son obligatorios' 
        });
    }

    const query = 'INSERT INTO estudiante (documento_identidad, nombre, apellido, email, telefono, fecha_nacimiento) VALUES (?, ?, ?, ?, ?, ?)';
    
    db.query(query, [documento_identidad, nombre, apellido, email, telefono, fecha_nacimiento], 
        (err, results) => {
            if (err) {
                // Manejo de error de duplicado
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(409).json({ 
                        mensaje: 'Ya existe un estudiante con ese documento' 
                    });
                }
                return res.status(500).json({ error: err });
            }
            res.status(201).json({ 
                mensaje: 'Estudiante creado exitosamente',
                documento_identidad: documento_identidad
            });
        }
    );
});

// ACTUALIZAR un estudiante existente
router.put('/:documento_identidad', (req, res) => {
    const doc = req.params.documento_identidad;
    const { nombre, apellido, email, telefono, fecha_nacimiento } = req.body;
    
    // Validación básica
    if (!nombre || !apellido) {
        return res.status(400).json({ 
            mensaje: 'Nombre y apellido son obligatorios' 
        });
    }

    const query = 'UPDATE estudiante SET nombre = ?, apellido = ?, email = ?, telefono = ?, fecha_nacimiento = ? WHERE documento_identidad = ?';
    
    db.query(query, [nombre, apellido, email, telefono, fecha_nacimiento, doc], 
        (err, results) => {
            if (err) return res.status(500).json({ error: err });
            if (results.affectedRows === 0) {
                return res.status(404).json({ 
                    mensaje: 'Estudiante no encontrado' 
                });
            }
            res.json({ 
                mensaje: 'Estudiante actualizado exitosamente',
                documento_identidad: doc
            });
        }
    );
});

// Eliminar un estudiante
router.delete('/:documento_identidad', (req, res) => {
    const doc = req.params.documento_identidad;
    db.query('DELETE FROM estudiante WHERE documento_identidad = ?',
        [doc], (err, results) => {
            if (err) return res.status(500).json({ error: err });
            if (results.affectedRows === 0)
                return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
            res.json({ 
                mensaje: 'Estudiante eliminado exitosamente',
                documento_identidad: doc 
            });
        }
    );
});

module.exports = router;