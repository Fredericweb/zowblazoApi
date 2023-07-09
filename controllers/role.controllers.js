const Db = require('../config/Db');

const role = Db.role

const add = async (req, res) => {
    try {
        const addRole = await role.create({ ...req.body })
        res.status(200).json({ message: 'Informations enregistrées', statusCode: 200 })
    } catch (err) {
        res.send({ message: "Une erreur s'est produite" })
    }
}

const update = async (req, res) => {
    const verifId = await role.findByPk(req.params.id)
    if (verifId === null) {
        res.json({ msg: "ce elemnent n'existe pas", statusCode: 500 })
    } else {
        try {
            const updateRole = await role.update(
                {
                    libRole: req.body.libRole
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
    const verifId = await role.findByPk(req.params.id)
    if (verifId === null) {
        res.json({ msg: "ce elemnent n'existe pas", statusCode: 500 })
    } else {
        try {
            const delRole = await role.destroy(
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
        const allRole = await role.findAll()
        res.json({data:allRole , statusCode: 200})
    } catch (err) {
        res.json({ msg: "Une erreur s'est produite", statusCode: 404 })
    }
}

module.exports = { add, update, del, all }