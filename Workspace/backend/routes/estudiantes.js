const express = require('express');
const router = express.Router();
const db = require('../db');
router.get('/', (req, res) => {
    db.query('SELECT * FROM estudiante', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

router.get('/:documento_identidad', (req, res) => {
    const doc = req.params.documento_identidad;
    db.query('SELECT * FROM estudiante WHERE documento_identidad =?',
        [doc], (err, results) => {
            if (err) return res.status(500).json({ error: err });
            if (results.length == 0)
                return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
            res.json(results[0]);
        });
});

router.delete('/:documento_identidad', (req, res) => {
    const doc = req.params.documento_identidad;
    db.query('DELETE FROM estudiante WHERE documento_identidad =?',
        [doc], (err, results) => {
            if (err) return res.status(500).json({ error: err });
            if (results.length == 0)
                return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
            res.json(results[0]);
        });
});

router.post('/', (req, res) => {
    const {nombre, segundo_nombre, apellido, fecha_nacimiento, documento_identidad, genero } = req.body;
    const query =`INSERT INTO estudiante(nombre, segundo_nombre, apellido, fecha_nacimiento, documento_identidad, genero)
                  VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(query, [nombre, segundo_nombre, apellido, fecha_nacimiento,
                documento_identidad, genero], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al insertar el estudiante',
                                        detalle: err});
        }
        res.status(201).json({
            mensaje: 'Estudiante agregado exitosamente',
            id_insertado: results.insertId

        });
     });
});

router.put('/:documento_identidad', (req, res) => {
    const { id } = req.params;
    const { nombre, segundo_nombre, apellido, fecha_nacimiento, documento_identidad, genero } = req.body;

    const query = `
        UPDATE estudiante 
        SET nombre = ?, 
            segundo_nombre = ?, 
            apellido = ?, 
            fecha_nacimiento = ?, 
            documento_identidad = ?, 
            genero = ?
        WHERE id = ?`;

    db.query(query, [nombre, segundo_nombre, apellido, fecha_nacimiento, documento_identidad, genero, id],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    error: 'Error al actualizar el estudiante',
                    detalle: err
                });
            }

            if (results.affectedRows === 0) {
                return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
            }

            res.status(200).json({
                mensaje: 'Estudiante actualizado exitosamente'
            });
        }
    );
});

        
                


module.exports = router;