module.exports = (sequelize, DataTypes) => {
    const resetToken = sequelize.define('reset_token', {
        token:{
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull:false
        },
        expiredAt:{
            type:DataTypes.DATE,
            allowNull: false
        }
    })
    return resetToken
}