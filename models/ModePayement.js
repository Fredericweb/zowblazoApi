module.exports = (sequelize, DataTypes) => {
    const modePayement = sequelize.define('modePayement', {
        libModePayement:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return modePayement
}