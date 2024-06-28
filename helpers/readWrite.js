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
    console.log(newNote.id);
    //reads the db file with all stored notes
    try {
        const data = await readFile('./db/db.json', 'utf8');
        // const savedNotes = JSON.parse(data); //do i need this?
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

module.exports = createNote;