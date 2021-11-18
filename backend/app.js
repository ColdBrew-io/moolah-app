const express = require('express')
const app = express()
const mysql = require('mysql')

// set to use either the env.PORT macro or 3000
const port = process.env.PORT || 3000

//TODO: user and password should be hidden in a .env file for better encryption
// connection details
const connection = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b6ce105c12adf5',
    password: 'fe7ea5b6',
    database: 'heroku_58f13569eb38541'
})

// view engine
app.set('view engine', 'ejs')

// render
app.get('/', function (req, res) {
    res.render('pages/index')

    connection.query('SELECT * FROM budgets', (error, rows) => {
        if (error) throw error;

        if (!error) {
            console.log(rows)
            res.render('pages/index', { rows })
        }

    })
})

app.listen(port)
console.log(`Sender is listening on port ${port}`)

