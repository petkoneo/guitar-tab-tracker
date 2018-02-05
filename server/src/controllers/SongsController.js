const {Song} = require("../models");

module.exports = {
    async index (req, res){
        try {
            const songs =  await Song.findAll({
                limit: 10
            })
            res.send(songs)
        } catch(err){
            res.status(500).send({
                error: 'Nastal problem pri stahovani hudby'
            })
        }
    },
    async show (req, res){
        try {
            const song =  await Song.findById(req.params.songId)
            res.send(song)
        } catch(err){
            res.status(500).send({
                error: 'Nastala chyba pri hladani skladby'
            })
        }
    },
    async post (req, res){
        try {
            const song =  await Song.create(req.body)
            res.send(song)
        } catch(err){
            res.status(500).send({
                error: 'Nastal problem pri vytvoreni skladby.'
            })
        }
    }
}
