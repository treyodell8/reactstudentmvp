require("dotenv").config();
const express = require('express');
const app = express();
const pool = require('./db/db.js')
// const cors = require('cors')

// app.use(cors);

const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/api/todos', async (req, res) => {
    try {
        const data = await pool.query("SELECT * FROM todolist;")
        res.json(data.rows)
    } catch (error) {
        console.error(error.message)
    }
})

app.get('/api/todos/:id', async (req, res) => {
    try {
        const data = await pool.query("SELECT * FROM todolist WHERE id = $1;", [req.params.id])
        res.json(data.rows)
    } catch (error) {
        console.error(error.message)
    }
})

app.post('/api/todos', async (req, res) => {
    try {
        const data = await pool.query("INSERT INTO todolist (task) VALUES ($1);", [req.body.task])
        res.json(data.rows)
    } catch (error) {
        console.error(error.message)
    }
})

app.delete('/api/todos/:id', async (req, res) => {
    try {
        const data = await pool.query("DELETE FROM todolist WHERE id = $1;", [req.params.id])
        res.json(data.rows)
    } catch (error) {
        console.error(error.message)
    }
})

app.patch('/api/todos/:id', async (req, res) => {
    try {
        const data = await pool.query("UPDATE todolist SET task = $1 WHERE id = $2;", [req.body.task, req.params.id])
        res.json(req.body)
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})