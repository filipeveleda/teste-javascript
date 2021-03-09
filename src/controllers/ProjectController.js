const Project = require('../models/Project');


module.exports ={
  async store(req, res) {
    const { name, navers} = req.body;

    const project = await Project.create({ name, navers });


    return res.json({
      name: project.name, 
      navers: project.navers
    });
  }
}
0