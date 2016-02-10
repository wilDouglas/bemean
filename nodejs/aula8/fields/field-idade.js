'use strict'
module.exports = {
  type: Number,
  validate: {
    validator: function(v){
        return v >= 18;
    },
    message: 'Sua idade é de {VALUE} anos, portanto não é permitida!'
  }
};
