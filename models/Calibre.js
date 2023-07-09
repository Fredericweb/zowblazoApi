module.exports = (sequelize, DataTypes) => {
    const calibre = sequelize.define('calibre', {
        libCalibre:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return calibre
}