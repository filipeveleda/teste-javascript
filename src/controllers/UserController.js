const User = require('../models/User');

module.exports = {


  async index(req, res) {
    const users = await User.findAll({
      attributes: ['name','birthdate','admission_date','job_role']
    });

    return res.json(users);
  },

  async store(req, res) {
    const { name, birthdate, admission_date, job_role, projects} = req.body;

    const user = await User.create({ name, birthdate, admission_date, job_role ,projects });

    return res.json({
      name: user.name,
      birthdate: user.birthdate,
      admission_date: user.admission_date,
      job_role: user.job_role,
      projects: user.projects
    });
  }
};