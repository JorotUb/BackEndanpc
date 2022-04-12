const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db')
var router = express.Router();

router.post('/',(req, res, next) => {
    const ADD_QUERY = `INSERT INTO petent (nume, prenume, telefon) VALUES ('${req.body.nume}', '${req.body.prenume}', '${req.body.telefon}');`

    connection.query(ADD_QUERY, (err) =>{
        if(err) console.log(err)
        else console.log("nume, prenume si telefon adaugat in baza de date")
    })
    console.log(req.body)
})

module.exports = router;