var notes = require('./notes.js');
const chalk = require('chalk');
var yargs = require('yargs');
// var sum = func;



yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe : 'Note Title',
            demandOption : true,
            type: 'string'
        },
        body: {
            describe : 'Note Body',
            demandOption : true,
            type: 'string'
        }
    },
    handler : (argv) => {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler : (argv) => {
     notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'List All Notes',
    handler : () => {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read note',
    builder: {
        title: {
            describe: 'Please Enter Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler : (argv) => {
       notes.readNote(argv.title);
    }
})

yargs.parse()

// console.log(yargs.argv);