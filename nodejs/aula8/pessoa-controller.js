'use strict'
const mongoose = require('mongoose');
const schema = require('./pessoaSchema.js');
const Model = require('./model')(schema,'Pessoa');

const CRUD = {
  create: function(data){
    /*
      create
    */
    const pessoa = new Model(data);
    if(pessoa.validateSync().toString() == undefined){
      pessoa.save(function(err,data){
        if(err) return console.log(err);

        return console.log("Inseriu: ",data);
      });
  }else{
    return console.log(pessoa.validateSync().toString());
  }

  },
  find: function(query){
    /**
      find
      */
      Model.find(query,function(err,data){
        if(err) return console.log(err);

        return console.log("Find: ",data);
      });
  },
  update: function(query,mod,options){
    /*
      update
      */
      let _options = options || {};
      Model.update(query,mod,_options,function(err,data){
        if(err) return console.log(err);

        return console.log("Alterou: ",data);
      });

  },
  delete:function(query){
    /*
    remove
    */
    Model.remove(query,function(err,data){
      if(err) return console.log(err);

      return console.log("Deletou: ",data);
    });

  }
};
module.exports = CRUD;
