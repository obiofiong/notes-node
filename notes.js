console.log("stating notes.js");

const fs = require("fs");

const addNote = (title, body) => {
	var notes = [];
	var note = {
		title,
		body,
	};
	try {
		var noteString = fs.readFileSync("notes-data.json");
		notes = JSON.parse(noteString);
	} catch (e) {}
	notes.push(note);
	fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

const getAll = () => {
	console.log("listing all notes");
};
const getNote = (title) => {
	console.log("Reading", title);
};

const removeNote = (title) => {
	console.log("deleting", title);
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
};
