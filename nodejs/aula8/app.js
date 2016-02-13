'use strict'
require('./db/config.js');
const CRUD = require('./pessoa-controller.js');
const query = {nome: "WILLIAM DOUGLAS DA SILVA" };
/*
CRUD.create({
  nome: "William Douglas da Silva",
  idade: 22,
  naturalidade: "Belo Horizonte, MG"
});
*/
//CRUD.find(query);
CRUD.find({
    nome: "WILLIAM DOUGLAS DA SILVA",
    idade: 22  
});
