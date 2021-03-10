const express = require('express');

const UserController = require('./controllers/UserController');
const ProjectController = require('./controllers/ProjectController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);



module.exports = routes;