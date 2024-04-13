const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


// This tool will be used to read, write, and delete notes
class StorageTool {
    read() {
        return readFileAsync("db/db.json", "utf8");
    }

    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }

    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;

            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }

            return parsedNotes;
        });
    }

    addNotes(note) {
        const { title, text } = note;

        if (!title || !text) {
            throw new Error("Note 'title' and 'text' cannot be blank");
        }

        const newNote = { title, text, id: Math.random() };

        return this.getNotes()
            .then((notes) => [...notes, newNote])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => newNote);
    }

    deleteNotes(id) {
        return this.getNotes()
            .then((notes) => notes.filter((note) => String(note.id) !== String(id)))
            .then((filteredNotes) => this.write(filteredNotes))
            .catch((err) => {
                console.log("Could not remove note: ", err);
            });
    }
}

// Export the StorageTool class to be used in other files
module.exports = new StorageTool();