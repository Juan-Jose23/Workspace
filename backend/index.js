const express = require('express');
const cors = require('cors');
const estudiantesRoutes = require('./routes/estudiantes');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use('/api/estudiantes', estudiantesRoutes);
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});