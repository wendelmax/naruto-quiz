'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Option.belongsTo(models.Question, {
        foreignKey: 'questionId',
        as: 'Question',
      })
    }
  }
  Option.init(
    {
      text: DataTypes.STRING,
      value: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      questionId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Option',
    },
  )
  return Option
}
