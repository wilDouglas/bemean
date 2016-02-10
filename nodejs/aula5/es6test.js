'use strict';

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

let a;
a = new Pessoa('William Douglas da Silva',22);
console.log(a);
console.log(__dirname);
console.log(__filename);
var buff = new Buffer("William");
console.log(buff.toString());
setTimeout(function () {
	// body...
	console.log('Hello World');
},10000)
