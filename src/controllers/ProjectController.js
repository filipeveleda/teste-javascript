const Project = require('../models/Project');


module.exports ={
  async store(req, res) {
    const { name, navers} = req.body;

    const project = await Project.create({ name, navers });


    return res.json({
      name: project.name, 
      navers: project.navers
    });
  },
  async index(req, res){
    const projects = await Project.findAll({ 
      attributes: ['id', 'name']
    });

    return res.json(projects);
  }

}
0