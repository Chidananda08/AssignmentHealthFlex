const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Tweet = sequelize.define('Tweet', {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

  return Tweet;
};
