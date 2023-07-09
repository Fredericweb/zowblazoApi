const Db = require('../config/Db');

const sexe = Db.sexe

const add = async (req, res) => {
    try {
        const addSexe = await sexe.create({ ...req.body })
        res.status(200).json({ message: 'Informations enregistrées', statusCode: 200 })
    } catch (err) {
        res.send({ message: "Une erreur s'est produite" })
    }
}

const update = async (req, res) => {
    const verifId = await sexe.findByPk(req.params.id)
    if (verifId === null) {
        res.json({ msg: "ce elemnent n'existe pas", statusCode: 500 })
    } else {
        try {
            const updateSexe = await sexe.update(
                {
                    libSex: req.body.libSex
                },
                {
                    where: { id: req.params.id }
                }
            )
            res.json({ msg: "Informations enregistées", statusCode: 200 })
        } catch (err) {
            res.json({ msg: "Une erreur s'est produite", statusCode: 404 })
        }
    }
}

const del = async (req, res) => {
    const verifId = await sexe.findByPk(req.params.id)
    if (verifId === null) {
        res.json({ msg: "ce elemnent n'existe pas", statusCode: 500 })
    } else {
        try {
            const delSexe = await sexe.destroy(
                {
                    where: { id: req.params.id }
                }
            )
            res.json({ msg: "Informations supprimées", statusCode: 200 })
        } catch (err) {
            res.json({ msg: "Une erreur s'est produite", statusCode: 404 })
        }
    }
}

const all = async (req, res) => { 
    try {
        const allSexe = await sexe.findAll()
        res.json({data:allSexe , statusCode: 200})
    } catch (err) {
        res.json({ msg: "Une erreur s'est produite", statusCode: 404 })
    }
}

module.exports = { add, update, del, all }