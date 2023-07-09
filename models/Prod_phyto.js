module.exports = (sequelize, DataTypes) => {
    const prod_phyto = sequelize.define('prod_phyto', {
        libProdPhyto:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return prod_phyto
}