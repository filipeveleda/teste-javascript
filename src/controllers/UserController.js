const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async store(req, res) {
    const { name, birthdate, admission_date, job_role} = req.body;

    const user = await User.create({ name, birthdate, admission_date, job_role });

    return res.json(user);
  }
};