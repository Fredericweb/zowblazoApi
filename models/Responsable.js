module.exports = (sequelize, DataTypes) => {
    const responsable = sequelize.define('responsable', {
        nom:{
            type: DataTypes.STRING,
            allowNull: false
        },
        prenom:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            isEmail:{
                args:true,
                msg: "Ce champs doit contenir un Email (exemple: Bileassemien@zow_agri.com)"
            }
        },
        numTel:{
            type: DataTypes.STRING,
        }
    })
    return responsable
}