const api = require('express').Router();
//importing functions to create and delete notes
const { createNote, deleteNote } = require('../helpers/readWrite');
//location of saved notes
const notes = require('../db/db.json');

//request to retrieve notes from DB
api.get('/notes', (req, res) => {
    return res.status(200).json(notes);
})

//request to post notes to db
api.post('/notes', createNote);

//delete request to delete a note
api.delete('/notes/:id', deleteNote);
module.exports = api;
