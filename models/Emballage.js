module.exports = (sequelize, DataTypes) => {
    const emballage = sequelize.define('emballage', {
        libEmballage:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return emballage
}