const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      admission_date: DataTypes.DATE,
      job_role: DataTypes.STRING,
    }, {
      sequelize
    })
  }

}

module.exports = User;

