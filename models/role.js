module.exports = (sequelize, DataTypes) => {
    const role = sequelize.define('role', {
        libRole : {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    })
    return role
}