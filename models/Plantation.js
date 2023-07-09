module.exports = (sequelize, DataTypes) => {
    const Plantation = sequelize.define('Plantation', {
      libPlantation:{
        type: DataTypes.STRING,
        allowNull:false
      },
      taillePlantation:{
        type: DataTypes.DOUBLE,
        allowNull: false
      }
      
    })
    return Plantation
}