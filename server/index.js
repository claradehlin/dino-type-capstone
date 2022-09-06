const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const {PORT} = process.env;
const sequelize = require('./sequelize');


app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../build")))

app.get(`/api/info`, async (req, res) => {
    let info = await sequelize.query(`
    SELECT * FROM scores
    `)
    res.status(200).send(info[0])
})

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
