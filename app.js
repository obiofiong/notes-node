console.log("Starting app...")
const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')
const { title } = require('process')

// var res = notes.addNote()
// console.log(res)

// const add = notes.add
// const addition = add(44,7)
// console.log(addition)

var argv = yargs.argv
var command = process.argv[2]
console.log(command)
console.log('process', process.argv)
console.log("yargs", argv)


if(command === "add"){
    notes.addNote(argv.title, argv.body)
}
else if(command === "list"){
    notes.getAll()
}
else if(command === "read"){
    notes.getNote(argv.title)
}
else if(command === "remove"){
    notes.remove(argv.title)
}else{
    console.log("Command not found")
}

// var user = os.userInfo()
// const username = user.username

// fs.appendFile('message.txt', `Hello ${username}, you are ${notes.age}years old`, (err) => {
//   if (err) throw err;
//   console.log('Greeted '+username);
// });