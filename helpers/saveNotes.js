// const fs = require ('fs');

// const saveNotes = () => {

//     fs.readFile('../db/db.json', 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//         } else {
//             const savedNotes = JSON.parse(data);

//             fs.writeFile('../db/db.json', JSON.stringify(savedNotes, null, 4),
//             (err) =>
//                 err
//                 ? console.error(err)
//                 : console.info('Updated notes')
//             );
//         }
//     });

// };

// const savedNotes = fs.readFile('../db/db.json', 'utf8', (error, data) => {
//     if (error) {
//         console.log("Can't read file, try again");
//     } else {
//         console.log(savedNotes);
//     }
// })
    




// module.exports = savedNotes;