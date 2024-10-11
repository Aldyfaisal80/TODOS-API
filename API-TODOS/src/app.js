import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mysql from 'mysql2/promise'

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())


const router = express.Router()

const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

// const errrorHandler = async (error, req, res, next) => {
//     Logging.error(error)
//     if (error.stack) {
//         Logging.error(error.stack)
//     }
//     res.status(500).json(' Somethink Broke!')
//     next()
// }

router.get('/', async (req, res, next) => {
    try {
        const sql = `SELECT * FROM todos`;
        const [data] = await (await db).execute(sql)
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Succesfully retrieved all todos data',
            data
        })
    } catch (error) {
        return next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    const { id: todoID } = req.params
    try {
        const sql = `SELECT * FROM todos WHERE id = ?`
        const value = [todoID];
        const [data] = await db.execute(sql, value)
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Succesfully retrieved todo data',
            data
        })
    } catch (error) {
        return next(error)
    }
})

router.post('/', async (req, res, next) => {
    const { text } = req.body

    try {
        const sql = `INSERT INTO todos (text) VALUES (?)`;
        const value = [text]
        const [data] = await db.execute(sql, value)
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Succesfully created todo data',
            data
        })
    } catch (error) {
        return next(error)
    }
})

router.put('/:id', async (req, res, next) => {
    const { id: todoID } = req.params
    const { text, status } = req.body

    if (!text && status) {
        return res.status(400).json({
            success: false,
            statusCode: 400,
            message: 'Some fields are missing',
        })
    }

    const nextTodo = { text, status };
    try {
        const sql = `UPDATE todos SET text = ?, status = ? WHERE id = ?`
        const value = [nextTodo.text, nextTodo.status, todoID]
        const [data] = await db.execute(sql, value)
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Succesfully updated todo data',
            data
        })
    } catch (error) {
        return next(error)
    }
})

router.patch('/:id', async (req, res, next) => {
    const { id: todoID } = req.params
    const { text, status } = req.body

    if (text === '' || (status !== undefined && typeof status !== 'boolean')) {
        return res.status(400).json({
            success: false,
            statusCode: 400,
            message: 'Invalid input: text cannot be empty and status must be a boolean',
        })
    }
    try {
        const updates = [];
        const values = [];
        if (text !== undefined) {
            updates.push('text = ?')
            values.push(text)
        }
        if (status !== undefined) {
            updates.push('status = ?')
            values.push(status)
        }

        if (updates.length === 0) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: 'No valid fields to update',
            })
        }

        values.push(todoID)

        const sql = `UPDATE todos SET ${updates.join(', ')} WHERE id = ?`
        const [data] = await db.execute(sql, values)

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Succesfully updated todo data',
            data
        })
    } catch (error) {
        return next(error)
    }
})

router.delete('/:id', async (req, res) => {
    const { id: todoID } = req.params
    try {
        const sql = `DELETE FROM todos WHERE id = ?`
        const value = [todoID]
        const [data] = await db.execute(sql, value)
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Succesfully deleted todo data',
            data
        })
    } catch (error) {
        return next(error)
    }
})



app.use('/todos', router)

export default app