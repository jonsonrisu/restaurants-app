const dbConfig = require("../config/config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },
    logging: false
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./User.js")(sequelize, Sequelize);
db.role = require("./Role.js")(sequelize, Sequelize);
db.category = require("./Category.js")(sequelize, Sequelize);
db.service = require("./Services.js")(sequelize, Sequelize);
db.product = require("./Product.js")(sequelize, Sequelize);



db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});

db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
  });

db.ROLES = ["user", "admin"];
module.exports = db;