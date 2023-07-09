const Db = require('../config/Db')

const prod_phyto = Db.prod_phyto

const all = async (req, res) => {
    try {
        const allProd_phyto = await prod_phyto.findAll()
        res.json({data: allProd_phyto, statusCode:200})
    } catch (err) {
        res.json({msg:"Une erreur s'est produite veuillez reesayer", statuscode: 404})
    }
}

const add = async (req, res) => {
    try {
        const addProd_phyto = await prod_phyto.create({...req.body})
        res.json({msg: "Informations enregistrées", statuscode: 200})
    } catch (err) {
        res.json({msg: "Modifications efcfectuées", statusCode: 200})
    }
}

const update = async (req, res) => {
    const verifId = await prod_phyto.findByPk(req.params.id)
    if (verifId === null) {
        res.json({msg: "ce utilisateur n'est pas dans la base de données", statusCode: 500})
    } else{
        try {
            const updateProd_phyto = await prod_phyto.update(
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
    const verifId = await prod_phyto.findByPk(req.params.id)
    if (verifId === null){
        res.json({msg: "ce utilisateur n'est pas dans la base de données", statusCode: 500})
    }else{
        try {
            const delProd_phyto = await prod_phyto.destroy(
                {where: {id: req.params.id}}
            )
            res.json({msg: "Utilisateurs supprimées", statusCode: 200})
        } catch (err) {
            res.json({msg: "Une erreur s'est produite veuillez reesayer", statusCode: 404})
        }
    }
}

module.exports = {all, add, update, del}