const router = require('express').Router();
const storeData = require('../helper/storageTool.js');

// GET and POST requests for notes from db.json
router.get('/notes', (req, res) => {
    storeData.getNotes()
        .then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
    storeData.addNotes(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err));
}); 

// DELETE request for notes from db.json
router.delete('/notes/:id', (req, res) => {
    storeData.deleteNotes(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));
});

// Export router for use in server.js
module.exports = router;