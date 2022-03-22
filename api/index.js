const express = require('express')
const app = express()
const Users = require('./users')
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    const { q } = req.query
    const keys = ["first_name", "last_name", "email"];

    const search = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(q))
        );
    };

    q ? res.json(search(Users)).slice(0, 10)
        : res.json(Users.slice(0, 10))
})



app.listen(5000, () => {
    console.log("API ON...");
})