const api = require('express').Router();
const createNote = require('../helpers/readWrite');
const notes = require('../db/db.json');

//request to retrieve notes from DB
api.get('/notes', (req, res) => {
    return res.status(200).json(notes);
})

//request to post notes to db
api.post('/notes', createNote);
module.exports = api;
