const fs = require("fs");

const fetchNotes = () => {
	try {
		var noteString = fs.readFileSync("notes-data.json");
		return JSON.parse(noteString);
	} catch (e) {
		return [];
	}
};
const saveNotes = (notes) => {
	fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

const addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body,
	};

	var duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
	}
	return note;
};

const getAll = () => {
	return fetchNotes();
};
const getNote = (title) => {
	const notes = fetchNotes();
	const note = notes.filter((note) => note.title === title);
	return note[0];
};

const removeNote = (title) => {
	const notes = fetchNotes();
	const newNotes = notes.filter((note) => note.title !== title);
	saveNotes(newNotes);
	return notes.length !== newNotes;
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
};
