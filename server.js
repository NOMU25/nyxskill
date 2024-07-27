const express = require('express');

const app = express();

app.use(express.json({ extended : false }));

app.get('/', (req, res) => res.send('Niggas in paris'));

// app.use('')

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started'));