const api = require('express').Router();
const path = require('path');
const notes = require('../db/db.json');

//request to retrieve notes from DB
api.get('/notes', (req, res) => {
    // console.info(`${req.method} request received to get notes`);
    return res.status(200).json(notes);
})

api.post('/notes', async (req, res) => {
    const { title, text } = req.body;

    if (title && text ) {
        const new Note {
            
        }
    }

    //     console.log(req.body);
    //     notes.push(req.body);
    //     console.log(notes); 

    // api.get('/notes', (req, res) => {
    //     // console.info(`${req.method} request received to get notes`);
    //     return res.status(200).json(notes);
    // })
}
)
module.exports = api;