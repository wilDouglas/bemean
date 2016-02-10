'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _pessoa = {
	name: String,
	idade: Number
}

const pessoa = new Schema(_pessoa);

module.exports = pessoa;

