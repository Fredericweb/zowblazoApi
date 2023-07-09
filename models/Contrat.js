module.exports = (sequelize, DataTypes) => {
    const contrat = sequelize.define('contrat', {
        mtContrat: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dateSignature: {
            type: DataTypes.DATE,
            allowNull: false

        },
        dateFin: {
            type: DataTypes.DATE,
            allowNull: false
        },
        pieceJointe:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timeStamps: false })
    return contrat
}