const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
    return res.send('Home page')
})

const admin = (req, res) => {
    return res.send('Admin dashbord')
}

const isAdmin = (req, res, next) => {
    console.log('isAdmin running')
    next()
}

app.get('/admin', isAdmin, admin)

app.listen(port, console.log(`server start on port ${port}`))