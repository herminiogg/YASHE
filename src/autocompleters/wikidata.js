"use strict";
var $ = require("jquery"),
rdfUtils = require('../utils/rdfUtils.js')

var API_ENDPOINT = 'https://www.wikidata.org/w/api.php/';
var QUERY = {

  action:'wbsearchentities',
  language:(navigator.language || navigator.userLanguage).split("-")[0],
  continue:0,
  limit:50,
  format: 'json',
}

module.exports = function(yashe, name) {
  return {
    isValidCompletionPosition: function() {
      return module.exports.isValidCompletionPosition(yashe);
    },
    get: function(token, callback) {

        var cur = yashe.getCursor();
     
        if(token.string == ':') {
          var possibleEntity = "";
          var prefix = yashe.getPreviousNonWsToken(cur.line, token).string;
        } else {
          var previousToken = yashe.getPreviousNonWsToken(cur.line, token);
          var prefix = yashe.getPreviousNonWsToken(cur.line, previousToken).string;
          var possibleEntity = token.string;
        }
        

        var query = QUERY
        query.search=possibleEntity
        //query.search=token

        //Add extra param if it is a property
        if(rdfUtils.isWikidataPropertiesPrefix(yashe,prefix)){
          query.type='property'
        }else{
          delete query.type
        }


        $.get(
            {
          
              url: API_ENDPOINT + '?' + $.param(query),
              dataType: 'jsonp',
          
            }).done( function( data ) {

              var list =[]
              
              //This condition is for an empty search
              if(data.error){
                list = [ {
                  text: '',
                  displayText: 'Type to search for an entity'
                } ];
                callback(list)
    
              }else{

                var entities = []
                var label,id,description,entities
                for(var entity in data.search){

                    label = data.search[entity].label
                    id = data.search[entity].id
                    description = data.search[entity].description

                    list =  {
                      text: id,
                      displayText: label + " (" + id + ") \n " + description
                    } ;

                    entities.push(list)
                   
                }
                entities.sort()
                callback(entities)
              }
            })
            
        
    },
    async: true,
    bulk: false,
    autoShow: false
  };
};

module.exports.isValidCompletionPosition = function(yashe) {


  
  var token = yashe.getCompleteToken();
  var cur = yashe.getCursor();

  //The cursor should stay at the end of the token
  if(token.end!=cur.ch)return false

  var previousToken = yashe.getPreviousNonWsToken(cur.line, token);
  if(previousToken.string == ':')
    var prefixName = yashe.getPreviousNonWsToken(cur.line, previousToken).string;
  else
    var prefixName = previousToken.string;

  //This line avoid the autocomplete in the prefix definition
  if(previousToken.string.toUpperCase() == 'PREFIX')return false


  if((token.string == ':' || previousToken.string == ':') && 
  (rdfUtils.isWikidataEntitiesPrefix(yashe,prefixName) 
  || rdfUtils.isWikidataPropertiesPrefix(yashe,prefixName)) )return true

 
  return false;
  
};
