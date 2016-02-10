'use strict'
const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/be-mean';
mongoose.connect(dbURI);

mongoose.connection.on('connected',function () {
	// body...
	console.log('Conectado! URI: ' + dbURI);
});
mongoose.connection.on('error',function () {
	// body...
	console.log('Erro de Conexão!');
});
