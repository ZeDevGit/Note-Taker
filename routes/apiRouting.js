const router = require('express').Router();
const storeData = require('../helper/storageTool.js');

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

router.delete('/notes/:id', (req, res) => {
    storeData.deleteNotes(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));
});

module.exports = router;