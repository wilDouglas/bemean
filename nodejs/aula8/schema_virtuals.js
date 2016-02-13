'use strict'
 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 const PersonSchema = new Schema({
    name: {
      first: String,
      last: String
    }
 });

 PersonSchema.virtual('name.full') // crio um parametro virtual onde, ele retorna o nome completo da pessoa
 .get(function(){ // funcao que concatena o primeiro com ultimo nome e abstrai no atributo full
   return this.name.first + ' ' + this.name.last;
 });

 PersonSchema.virtual('name.initial')
 .get(function(){
    return this.name.first[0] + this.name.last[0];
 });

 const Person = mongoose.model('Person',PersonSchema);

 const William = new Person({
   name: { first: 'William', last: 'Silva'}
 });

 console.log('Nome Completo: ', William.name.full); // acesso o parametro virtual que me retorna o first e last name do Person
 console.log('Iniciais: ', William.name.initial);
 
