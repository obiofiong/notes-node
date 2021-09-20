// var obj = {
//     name : "john",
// }

// var stringObj = JSON.stringify(obj)
// console.log(typeof stringObj)
// console.log(stringObj)

// var personString = '{"name" : "John", "age":25}';
// var person = JSON.parse(personString);
// console.log(person);

const fs = require("fs");

var originalNote = {
	title: "This is the title",
	body: "This is the body",
};
var orignalNoteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json", orignalNoteString);

var noteString = fs.readFileSync("notes.json");
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
