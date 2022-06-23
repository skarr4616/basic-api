const express = require("express");
const mongoose = require("mongoose");

const notesRouter = express.Router();
const noteModel = require("../../db/models/note.model");

// Get Notes list
notesRouter.get('/', (request, response) => {
    
    noteModel.find({}, (err, notes) => {
        if (err) {
            return console.error(err);
        }

        response.json({
            listOfNote: notes
        })
    })


    // Note.find(function (err, kittens) {
    //     if (err) {
    //         return console.error(err);
    //     }

    //     console.log(kittens);
    // })
})

// Add Note
notesRouter.post('/', (request, response) => {
    
    // console.log(request.body);
    const newNote = new noteModel(request.body);
    newNote.save().then((savedNote) => {
        response.json({
            note: savedNote,
            success: true
        });
    });
    
})

// ID should be of 12 characters only. Otherwise error will be thrown
// Delete Note by ID
notesRouter.delete('/:id', (request, response) => {
    
    const noteId = request.params.id;
    noteModel.findByIdAndRemove(noteId, (err, note) => {
        if (err) {
            return console.error(err);
        }

        if (!note) {
            return response.status(404).json({
                status: "Note not found"
            });
        }

        response.json({
            status: "Note found and deleted",
            note
        })
    })
})

// Get Note by ID
notesRouter.get('/:id', (request, response) => {
    
    const noteId = request.params.id;
    noteModel.findById(noteId, (err, note) => {
        if (err) {
            return console.error(err);
        }

        if (!note) {
            return response.status(404).json({
                status: "Note not found"
            });
        }

        response.json({
            status: "Note found",
            note
        })
    })
})

// Update Note by ID
notesRouter.put('/:id', (request, response) => {
    
    const noteId = request.params.id;
    const updatedBody = request.body;

    /**
     * The findByIdAndUpdate method returns the previous old note.
     * To get the new note pass a 3rd object parameter: {new: true}
     */
    noteModel.findByIdAndUpdate(noteId, updatedBody, (err, prevNote) => {
        if (err) {
            return console.error(err);
        }

        if (!prevNote) {
            return response.status(404).json({
                status: "Note not found"
            });
        }

        response.json({
            status: "Note found and updated",
            prevNote
        })
    });
   
})

module.exports = {
    notesRouter
}