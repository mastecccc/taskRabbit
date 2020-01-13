const fs = require('fs');
const getNotes = () => {
    return "notes"
}

const chalk = require('chalk');

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(element => {        
        console.log(chalk.blue.inverse(element.title));
    });
}

const loadNotes = () => {

    try {
        var dataBuffer = fs.readFileSync('notes.json');
        var dataString = dataBuffer.toString();
        return JSON.parse(dataString);
    } catch (e) {
        return []
    }

}

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push ({
            title: title,
            body, body
    })
    saveNotes(notes);
    console.log(chalk.green.inverse("New Note added"));
    } else {
        console.log(chalk.red.inverse("Please use another title"));
    }




}

const removeNote = (title, body)  => {
    const notes = loadNotes();
    const notesToKeep = notes.filter( (note) => {
            return note.title != title;
    })

    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse("Note  Removed"))
    } else {
        console.log(chalk.red.inverse("Note Not Removed"))
    }
  

}

const readNote = (title)  => {
    
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        console.log(chalk.red.inverse("No Note named: " + title));
    } else {
        console.log(chalk.green.inverse("Title: "+ duplicateNote.title));
        console.log(chalk.green.inverse("Body: "+ duplicateNote.body));
    }
}

const saveNotes = (notes) => {
    var obj = JSON.stringify(notes);
    fs.writeFileSync('notes.json', obj);
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};
