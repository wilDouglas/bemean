'use strict'
require('./db/config.js');
const CRUD = require('./pessoa-controller.js');
const query = {nome: "William Douglas da Silva" };

CRUD.create({
  nome: "Marcos Vinicius Pereira",
  idade: 22,
  naturalidade: "Campinas"
});

//CRUD.find(query);
