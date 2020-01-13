
var notes= "Aoife needs to shower"

var r = new Date().toDateString();

function getNotes(){
    return 'Your notes for ' + r  + ' : ' + notes;
}
module.exports = getNotes;
