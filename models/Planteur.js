module.exports = (sequelize, DataTypes) => {
    const plantateur = sequelize.define('plantateur', {
      nom:{
        type: DataTypes.STRING,
        allowNull: false
      },
      prenom:{
        type: DataTypes.STRING,
        allowNull: false
      },
      adresse:{
        type: DataTypes.STRING,
        allowNull: false
      }
      
    })
    return plantateur
}