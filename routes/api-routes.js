const db = require("../models");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        db.Note.findAll({})
            .then(function(dbNote) {
                res.json(dbNote)})
            .catch(function(err) { 
                throw err });
    });

    app.post("/api/notes", function(req, res) {
        db.Note.create(req.body)
            .then(function(dbNote) {
                res.json(dbNote)})
            .catch(function(err) {
                throw err });
    });

    app.delete("api/notes/:id", function(req, res) {
        db.Note.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbNote) {
            res.json(dbNote)})
        .catch(function(err) {
            throw err });
    });
}
