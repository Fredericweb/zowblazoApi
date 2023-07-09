module.exports = (sequelize, DataTypes) => {
    const sexe = sequelize.define('sexe',{
        libSex:{
            type: DataTypes.STRING,
            unique: true
        }
    })
    return sexe
}