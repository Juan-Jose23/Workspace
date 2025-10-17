const express = require('express');
const router = express.Router();
const db = require('../db');
router.get('/', (req, res) => {
    db.query('SELECT * FROM estudiante', (err, results) =>{
        if (err) return res.status(500).json({ error: err});
        res.json(results);
    });
});

router.get('/:documento_identidad', (req, res) => {
    const doc = req.params.documento_identidad;
    db.query('SELECT * FROM estudiante WHERE documento_identidad =?',
        [doc], (err, results) => { 
        if (err) return res.status(500).json({ error: err});
        if (results.length ==0)
            return res.status(404).json({ mensaje:'Estudiante no encontrado'});
        res.json(results[0]);
    });
});

module.exports = router;