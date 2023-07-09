const Db = require('../config/Db')

const planteur = Db.planteur

const all = async (req, res) => {
    try {
        const allPlanteur = await planteur.findAll()
        res.json({data: allPlanteur, statusCode:200})
    } catch (err) {
        res.json({msg:"Une erreur s'est produite veuillez reesayer"+err, statuscode: 404})
    }
}

const add = async (req, res) => {
    try {
        const addPlanteur = await planteur.create({...req.body})
        res.json({msg: "Informations enregistrées", statuscode: 200})
    } catch (err) {
        res.json({msg: "Modifications efcfectuées", statusCode: 200})
    }
}

const update = async (req, res) => {
    const verifId = await planteur.findByPk(req.params.id)
    if (verifId === null) {
        res.json({msg: "ce utilisateur n'est pas dans la base de données", statusCode: 500})
    } else{
        try {
            const updatePlanteur = await planteur.update(
                {
                    ...req.body
                },
                {
                    where : {id: req.params.id}
                }
            )
            res.json({msg: "Modifications efcfectuées", statusCode: 200})
        } catch (err) {
            res.json({msg:"Une erreur s'est produite veuillez reesayer", statuscode: 404})
        }
    }
  
}

const del = async (req, res) => {
    const verifId = await planteur.findByPk(req.params.id)
    if (verifId === null){
        res.json({msg: "ce utilisateur n'est pas dans la base de données", statusCode: 500})
    }else{
        try {
            const delPlanteur = await planteur.destroy(
                {where: {id: req.params.id}}
            )
            res.json({msg: "Utilisateurs supprimées", statusCode: 200})
        } catch (err) {
            res.json({msg: "Une erreur s'est produite veuillez reesayer", statusCode: 404})
        }
    }
}

module.exports = {all, add, update, del}