const Db = require('../config/Db');

const typeContrat = Db.typeContrat

const add = async (req, res) => {
    try {
        const addTypeContrat = await typeContrat.create({ ...req.body })
        res.status(200).json({ message: 'Informations enregistrées', statusCode: 200 })
    } catch (err) {
        res.send({ message: "Une erreur s'est produite" })
    }
}

const update = async (req, res) => {
    const verifId = await typeContrat.findByPk(req.params.id)
    if (verifId === null) {
        res.json({ msg: "ce elemnent n'existe pas", statusCode: 500 })
    } else {
        try {
            const updatetypeContrat = await typeContrat.update(
                {
                    libTypeContrat: req.body.libTypeContrat
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
    const verifId = await typeContrat.findByPk(req.params.id)
    if (verifId === null) {
        res.json({ msg: "ce elemnent n'existe pas", statusCode: 500 })
    } else {
        try {
            const delTypeContrat = await typeContrat.destroy(
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
        const alltypeContrat = await typeContrat.findAll()
        res.json({data:allTypeContrat , statusCode: 200})
    } catch (err) {
        res.json({ msg: "Une erreur s'est produite", statusCode: 404 })
    }
}

module.exports = { add, update, del, all }