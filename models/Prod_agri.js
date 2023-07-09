module.exports = (sequelize, DataTypes) => {
    const Prod_agri = sequelize.define('Prod_agri', {
       libProduit:{
        type: DataTypes.STRING
       },
    })
    return Prod_agri
}