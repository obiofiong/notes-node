console.log("stating notes.js")

const addNote = (title, body) =>{
    console.log("adding note", title, body)

}

const getAll = ( ) => {
    console.log("listing all notes")
}
const getNote = (title ) => {
    console.log("Reading" , title)
}

const removeNote = (title ) => {
    console.log("deleting", title)
}


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
}