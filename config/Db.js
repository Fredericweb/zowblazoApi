const { Sequelize, DataTypes } = require('sequelize');
const crypt = require('sequelize-bcrypt')
const dbParam = require('./DbConfig')

const sequelize = new Sequelize(
    dbParam.DB_NAME,
    dbParam.USERNAME,
    dbParam.PASSWORD, {
        host: dbParam.HOST,
        dialect: dbParam.DIALECT
    }
);

try {
    sequelize.authenticate();
    console.log(`Connecté à ${dbParam.DB_NAME}`);
} catch (error) {
    console.error('Une erreur est survenu:', error);
}
const Db = {}

Db.Sequelize = Sequelize;
Db.sequelize = sequelize;

/*------------------------------------------------------------------------------------
                               INTIALISATION DES MODELS
 -------------------------------------------------------------------------------------*/

 Db.users = require('../models/users')(sequelize, DataTypes);
 Db.sexe = require('../models/sexe')(sequelize, DataTypes);
 Db.role = require('../models/role')(sequelize, DataTypes);
 Db.responsable = require('../models/Responsable')(sequelize, DataTypes);
 Db.contrat = require('../models/Contrat')(sequelize, DataTypes);
 Db.typeContrat = require('../models/TypeContrat')(sequelize, DataTypes);
 Db.personnel = require('../models/Personnel')(sequelize, DataTypes);
 Db.plantation = require('../models/Plantation')(sequelize, DataTypes);
 Db.parcelle = require('../models/Parcelle')(sequelize, DataTypes);
 Db.prod_agri = require('../models/Prod_agri')(sequelize, DataTypes);
 Db.calibre = require('../models/Calibre')(sequelize, DataTypes);
 Db.emballage = require('../models/Emballage')(sequelize, DataTypes);
 Db.modePayement = require('../models/ModePayement')(sequelize, DataTypes);
 Db.planteur = require('../models/Planteur')(sequelize, DataTypes);
 Db.prod_phyto = require('../models/Prod_phyto')(sequelize, DataTypes);
 Db.reset_token = require('../models/ResetPwdToken')(sequelize,DataTypes);



 Db.sequelize.sync({ force: false })
    .then(() => {
        console.log('ok')
    })



/*------------------------------------------------------------------------------------
                              GESTION DES CLES ETRANGERES 
-------------------------------------------------------------------------------------*/

// connexion entre sexe et user
Db.sexe.hasMany(Db.users)
Db.users.belongsTo(Db.sexe)

// connexion entre user et resetToken
Db.users.hasMany(Db.reset_token)
Db.reset_token.belongsTo(Db.users)


module.exports = Db