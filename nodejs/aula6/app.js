'use strict';
require('./config.js');

const Pessoa = require("./pessoa.js");

const query = {
	name:"William",
	idade:22
}

const mongoose = require('mongoose');

var Model = mongoose.model('pessoa',Pessoa);
var pes = new Model(query);

pes.save(function	(err,data) {
	// body...
	if (err) {
		return console.log(err);
	}
	return console.log(data);
})

/*pes.save(function(err,data){

	if(err) return console.log(err);
	console.log("Inseriu: ",data);

});*/


/*
Model.find(query,function (err,data) {
	// body...
	if(err) return console.log(err);

	return console.log('Buscou',data);
});*/

/*
Model.update(query,{idade:23},function (err,data){
	if(err) return console.log(err);

	return console.log('Alterou',data);
});*/
/*
Model.remove(query,function(err,data){
    if(err) return console.log(err);
    return console.log(data);
});*/
