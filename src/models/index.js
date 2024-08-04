const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

const User = require('./User')(sequelize);
const Tweet = require('./Tweet')(sequelize);

User.hasMany(Tweet, { foreignKey: 'userId' });
Tweet.belongsTo(User, { foreignKey: 'userId' });

module.exports = { sequelize, User, Tweet };
