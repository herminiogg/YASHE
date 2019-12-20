"use strict";
var $ = require("jquery");
module.exports = function(yasqe) {
  return {
    isValidCompletionPosition: function() {
      var token = yasqe.getTokenAt(yasqe.getCursor());
      /**if (token.type != "ws") {
        token = yasqe.getCompleteToken(token);
        if (token && (token.string[0] === '?' || token.string[0] === '$')) {
          return true;
        }
      }
      return false;*/
      return true;
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