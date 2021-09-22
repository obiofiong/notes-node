console.log("Starting app...");
const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");
const { title } = require("process");

// var res = notes.addNote()
// console.log(res)

// const add = notes.add
// const addition = add(44,7)
// console.log(addition)

var argv = yargs.argv;
var command = argv._[0];

console.log("yargs", argv);

if (command === "add") {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log("Note created sucessfully");
		console.log("---");
		console.log(`Title ${note.title}`);
		console.log(`Body ${note.body}`);
	} else {
		consoele.log("Note title Taken");
	}
} else if (command === "list") {
	notes.getAll();
} else if (command === "read") {
	console.log(`Searching for note title ${argv.title}`);
	const note = notes.getNote(argv.title);
	if (note) {
		console.log("---");
		console.log(`Title ${note.title}`);
		console.log(`Body ${note.body}`);
	} else {
		console.log("Note does not exist");
	}
} else if (command === "remove") {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? "Note was removed" : "Note not found";
	console.log(message);
} else {
	console.log("Command not found");
}

// var user = os.userInfo()
// const username = user.username

// fs.appendFile('message.txt', `Hello ${username}, you are ${notes.age}years old`, (err) => {
//   if (err) throw err;
//   console.log('Greeted '+username);
// });
