module.exports = (sequelize, DataTypes) => {
    const Parcelle = sequelize.define('Parcelle', {
        nomParcelle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        longitude: {
            type: DataTypes.INTEGER,
            allowNull:false
        }, 
        latitude:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        tailleParcelle:{
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    })
    return Parcelle
}