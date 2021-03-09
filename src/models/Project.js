const { Model, DataTypes } = require('sequelize');

class Project extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      navers: DataTypes.ARRAY(DataTypes.INTEGER)
    }, {
      sequelize
    })
  }

}

module.exports = Project;