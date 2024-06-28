const notes = require('../db/db.json');

const fs = require ('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

//function to create a new note and assign title and text to req.body
const createNote = async (req, res) => {
  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
        title,
        text,
        id: uuidv4()
    };
    
    //reads the db file with all stored notes
    try {
        const data = await readFile('./db/db.json', 'utf8');
        notes.push(newNote);

        //writes db file with updated notes
        await writeFile('./db/db.json', JSON.stringify(notes, null, 4));
        res.status(201).json(notes);
    } catch (error) {
        console.log('Error, try again');
    }
  } else {
    res.status(400).json({error: 'Title and text required'});
  }
}

//function to delete note
const deleteNote = async (req, res) => {
    const data = await readFile('./db/db.json', 'utf8');
    const { id } = req.params;
    
    //finds index of note
    const index = notes.findIndex(note => note.id === id);

    //removes index from notes array
    if (index !== -1) {
        notes.splice(index, 1);
        //writes updated db.json file
        await writeFile('./db/db.json', JSON.stringify(notes, null, 4));

        //sends success message back to client
        res.status(204).json(notes);
    } else {
        res.status(404).json({error: 'No note found'});
    }
}

module.exports = { createNote, deleteNote };