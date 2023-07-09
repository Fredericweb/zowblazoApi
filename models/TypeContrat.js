module.exports = (sequelize, DataTypes) => {
    const TypeContrat = sequelize.define('TypeContrat', {
        libTypeContrat: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timeStamps: false })
    return TypeContrat
}