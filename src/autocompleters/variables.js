"use strict";
var $ = require("jquery");
var yashe = require('../main.js')
module.exports = function(yashe) {
  return {
    isValidCompletionPosition: function() {
      var token = yashe.getTokenAt(yashe.getCursor());
      if (token.type != "ws") {
        return true;
      }
      return false;
    },
    get: function(token) {
        var variables = [];
        if (token.trim().length == 0) return []; //nothing to autocomplete
        var possibleVariables = yashe.getDefinedVariables();
        for (var variable in possibleVariables) {
            if (!(variable.indexOf(token) !== 0 || variable == token)) 
                variables.push(variable);
        }
        variables.sort();
        return variables;
    },
    async: false,
    bulk: false,
    autoShow: true
  };
};