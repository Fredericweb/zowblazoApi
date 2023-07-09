const Db = require('../config/Db');
const crypt = require('sequelize-bcrypt')
const jwt = require("jsonwebtoken");
const users = Db.users
const maxAge = 3 * 24 * 60 * 60 * 1000;
crypt(users, {
    field: 'password',
    rounds: 12,
    compare: 'authenticate',
})
const resetToken = Db.reset_token
const crypto = require('crypto')

const signUp = async(req, res) => {
    console.log({...req.body })
    try {
        // verification du login utilisateur
        const verifEmail = await users.findOne({ where: { email: req.body.email } })
        if (verifEmail) {
            res.json({ message: "L'email est déjà utilisé !!"+req.body.email, statusCode: 201 })
            console.log({ message: "L'email est déjà utilisé !!" })
        } else {
            const user = await users.create({...req.body });
            res.status(200).json({ message: 'Informations enregistrées', statusCode: 200 })
            console.log({ message: 'Informations enregistrées' }, user)
        }

    } catch (err) {
        res.status(404).json({ message: "Une erreur s'est produite", statusCode: 400 })
        console.log({ message: err })
    }

}

const signIn = async(req, res) => {
    const { email, password } = req.body
    const verifUserInfo = await users.findOne({ where: { email: email } })
    if (!verifUserInfo)
        return res.json({ message: "L'email ou mot de passe incorrect", statusCode: 201 })
    if (!verifUserInfo.authenticate(password))
        return res.json({ message: "L'email ou mot de passe incorrect", statusCode: 204 })
    const token = jwt.sign({ id: verifUserInfo.id },
        process.env.JWT_SECRET, { expiresIn: maxAge }
    );
    res.cookie('jwt', token, { httpOnly: true, maxAge });
    res.status(200).json({
        message: `Bienvenue ${verifUserInfo.nom} ${verifUserInfo.prenom}`,
        user: verifUserInfo,
        statusCode: 200
    })
}

const all = async(req, res) => {
    try {
        const allUser = await users.findAll()
        res.status(200).json(allUser)
    } catch (err) {
        res.status(404).json({ message: "une erreur s'est produite",statusCode: 404 })
        console.log({ message: "une erreur s'est produite" }, err)
    }
}
const userInfo = async(req, res) => {
    const info = await users.findByPk(req.params.id)
    if (info === null) {
        res.status(200).json({ message: "utilisateur introuvable", statusCode: 200 })
        console.log({ message: "utilisateur introuvable" })
    } else {
        res.status(201).json(info)
        console.log(info)
    }
}
const update = async(req, res) => {
    const verifId = await users.findByPk(req.params.id)
    const {nom, prenom, sexeId, numTel, profile, email } = req.body
    if (verifId === null) {
        res.json({ message: 'Utilisateur introuvable', statusCode: 204 })
        console.log({ message: 'Utilisateur introuvable' })
    } else {
        try {
            const userUpdate = await users.update({
                nom: nom,
                prenom: prenom,
                sexeId: sexeId,
                numTel: numTel,
                profile: profile,
                email: email
            }, {
                where: { id: req.params.id }
            })
            res.json({ message: 'modification effectuée', statusCode: 200 })
            console.log({ message: 'modification effectuée' })
        } catch (err) {
            res.json({ message: "une erreur s'est produite", statusCode: 400 })
            console.log({ message: err})
        }
    }
}
const logout = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
}
const remove = async(req, res) => {
    const verifId = await users.findByPk(req.params.id)
    if (verifId === null) {
        res.json({ message: 'Utilisateur introuvable', statusCode: 201 })
        console.log({ message: 'Utilisateur introuvable' })
    } else {
        try {
            const removeUser = await users.destroy({
                where: { id: req.params.id }
            })
            res.json({ message: 'Utilisateur supprimé', statusCode: 200 })
        } catch (err) {
            res.json({ message: "Une erreur s'est produite", statusCode: 400 })
        }
    }
}

const changePwd = async(req, res) => {
    const verifId = await users.findByPk(req.params.id)
    const {oldPassword, password} = req.body
    if (!verifId){
        res.json({message: 'Utilisateur introuvable', statusCode: 404})
        console.log("Utilisateur introuvable")
    } 
    if(!oldPassword || !password){
        res.json({message: "Veuillez entrer l'ancien ou le nouveua mot de passe", statusCode: 404})
    }
    const pwdIsCorrect = await verifId.authenticate(oldPassword)
    if(verifId && pwdIsCorrect){
        verifId.password = password
        await verifId.save()
        res.json({ message: 'modification effectuée', statusCode: 200 })
    }else{
        res.json({ message: "mot de passe incorrecte", statusCode: 400 })
    }
}

//reinitialisation du mot de passe
const resetPwd = async(req, res) => {
    const { email } = req.body
    const user = await users.findOne({ where: { email: email } })
    if (!email) {
        res.json({message: "L'email n'existe pas dans la BD"})
    }

    // creation du token
    let resetToken = crypto.randomBytes(32).toString('hex') + user.id

    console.log(resetToken);
    
}
module.exports = { signUp, all, userInfo, update, signIn, logout, remove, changePwd, resetPwd }