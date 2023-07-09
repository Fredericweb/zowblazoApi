module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        profile:{
            type: DataTypes.STRING,
            defaultValue: '/home'
        },
        numTel: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            isEmail: {
                args: true,
                msg: 'Ce champs doit contenir un Email (exemple: Bileassemien@zow_agri.com)'
            }
        }
    })
    return users
}