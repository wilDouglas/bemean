'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nome = require('./fields/field-nome.js');
const idade = require('./fields/field-idade.js');
const naturalidade = require('./fields/field-naturalidade.js');
const create_at = require('./fields/field-create_at.js');

const _pessoa = {
	nome,
	idade,
  naturalidade,
  create_at
};
module.exports = new Schema(_pessoa);
