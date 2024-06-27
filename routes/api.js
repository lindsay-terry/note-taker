const api = require('express').Router();
const path = require('path');
const notes = require('../db/db.json');
const savedNotes = require('../helpers/saveNotes');
const fs = require ('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


//request to retrieve notes from DB
api.get('/notes', (req, res) => {
    // console.info(`${req.method} request received to get notes`);
    return res.status(200).json(notes);
})

api.post('/notes', async (req, res) => {
    const { title, text } = req.body;

    if (title && text ) {
            const newNote = {
                title,
                text,
            };

            try {
                const data = await readFile('./db/db.json', 'utf8');
                const notes = JSON.parse(data);
                notes.push(newNote);

                await writeFile('./db/db.json', JSON.stringify(notes, null, 4));
                console.log('Note successfully recorded');

                // await readFile('./db/db.json', 'utf-8');

                res.json(api.get('/notes', (req, res) => {
                    return notes;
                }));
            } catch (error) {
                console.log('Error, try again');
            } 
        } else {
            res.status(400).json({error: 'Title and text required'});
        }
    }
)
module.exports = api;

    //     console.log(req.body);
    //     notes.push(req.body);
    //     console.log(notes); 

    // api.get('/notes', (req, res) => {
    //     // console.info(`${req.method} request received to get notes`);
    //     return res.status(200).json(notes);
    // })
