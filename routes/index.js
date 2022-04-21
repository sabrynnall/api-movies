const express = require("express");
const GenderController = require('../controllers/gender.controller');
const PersonController = require('../controllers/person.controller');
const routes = express.Router();

routes.get('/gender', GenderController.listar);
routes.get('/person', PersonController.listar);
routes.put('/person/:id', PersonController.atualizar);

module.exports = routes;
