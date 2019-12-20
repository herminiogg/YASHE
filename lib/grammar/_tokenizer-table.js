module.exports = {table:
{
  "*[.,allowedIdentifiers]" : {
     ".": ["[.,allowedIdentifiers]","*[.,allowedIdentifiers]"], 
     ">": [], 
     "UNION": [], 
     "JOIN": [], 
     "+": [], 
     "]": [], 
     "MATCHING": []}, 
  "*[or([STRING_OR_VAR,.,[,],@,a,AS,$])]" : {
     "STRING_OR_VAR": ["[or([STRING_OR_VAR,.,[,],@,a,AS,$])]","*[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     ".": ["[or([STRING_OR_VAR,.,[,],@,a,AS,$])]","*[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     "[": ["[or([STRING_OR_VAR,.,[,],@,a,AS,$])]","*[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     "]": ["[or([STRING_OR_VAR,.,[,],@,a,AS,$])]","*[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     "@": ["[or([STRING_OR_VAR,.,[,],@,a,AS,$])]","*[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     "a": ["[or([STRING_OR_VAR,.,[,],@,a,AS,$])]","*[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     "AS": ["[or([STRING_OR_VAR,.,[,],@,a,AS,$])]","*[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     "$": ["[or([STRING_OR_VAR,.,[,],@,a,AS,$])]","*[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     ">": []}, 
  "*[predicateObject,;]" : {
     "a": ["[predicateObject,;]","*[predicateObject,;]"], 
     ":": ["[predicateObject,;]","*[predicateObject,;]"], 
     "STRING_OR_VAR": ["[predicateObject,;]","*[predicateObject,;]"], 
     "}": []}, 
  "*decl" : {
     "SOURCE": ["decl","*decl"], 
     "PREFIX": ["decl","*decl"], 
     "EXPRESSION": ["decl","*decl"], 
     "MATCHER": ["decl","*decl"], 
     "ITERATOR": ["decl","*decl"], 
     "AUTOINCREMENT": ["decl","*decl"], 
     "$": [], 
     "a": [], 
     ":": [], 
     "STRING_OR_VAR": [], 
     "<": []}, 
  "*field" : {
     "FIELD": ["field","*field"], 
     "}": [], 
     "ITERATOR": []}, 
  "*nestedIterator" : {
     "ITERATOR": ["nestedIterator","*nestedIterator"], 
     "}": []}, 
  "*shape" : {
     "a": ["shape","*shape"], 
     ":": ["shape","*shape"], 
     "STRING_OR_VAR": ["shape","*shape"], 
     "<": ["shape","*shape"], 
     "$": []}, 
  "+[.,allowedIdentifiers]" : {
     ".": ["[.,allowedIdentifiers]","*[.,allowedIdentifiers]"]}, 
  "+[or([STRING_OR_VAR,.,[,],@,a,AS,$])]" : {
     "STRING_OR_VAR": ["[or([STRING_OR_VAR,.,[,],@,a,AS,$])]","*[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     ".": ["[or([STRING_OR_VAR,.,[,],@,a,AS,$])]","*[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     "[": ["[or([STRING_OR_VAR,.,[,],@,a,AS,$])]","*[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     "]": ["[or([STRING_OR_VAR,.,[,],@,a,AS,$])]","*[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     "@": ["[or([STRING_OR_VAR,.,[,],@,a,AS,$])]","*[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     "a": ["[or([STRING_OR_VAR,.,[,],@,a,AS,$])]","*[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     "AS": ["[or([STRING_OR_VAR,.,[,],@,a,AS,$])]","*[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     "$": ["[or([STRING_OR_VAR,.,[,],@,a,AS,$])]","*[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"]}, 
  "+[predicateObject,;]" : {
     "a": ["[predicateObject,;]","*[predicateObject,;]"], 
     ":": ["[predicateObject,;]","*[predicateObject,;]"], 
     "STRING_OR_VAR": ["[predicateObject,;]","*[predicateObject,;]"]}, 
  "+field" : {
     "FIELD": ["field","*field"]}, 
  "?AS" : {
     "AS": ["AS"], 
     "STRING_OR_VAR": [], 
     "a": []}, 
  "?STRING_OR_VAR" : {
     "STRING_OR_VAR": ["STRING_OR_VAR"], 
     ":": []}, 
  "?[+,STRINGOPERATOR]" : {
     "+": ["[+,STRINGOPERATOR]"], 
     ">": []}, 
  "?[,,replacedStrings]" : {
     ",": ["[,,replacedStrings]"], 
     "AS": []}, 
  "?[BY,DIGITS]" : {
     "BY": ["[BY,DIGITS]"], 
     ">": [], 
     "+": []}, 
  "?[STRINGOPERATOR,+]" : {
     "STRINGOPERATOR": ["[STRINGOPERATOR,+]"], 
     "DIGITS": []}, 
  "?[TO,DIGITS]" : {
     "TO": ["[TO,DIGITS]"], 
     ">": [], 
     "+": [], 
     "BY": []}, 
  "?[allowedIdentifiers]" : {
     "STRING_OR_VAR": ["[allowedIdentifiers]"], 
     "a": ["[allowedIdentifiers]"], 
     "AS": ["[allowedIdentifiers]"], 
     ":": []}, 
  "?[and,matchers]" : {
     "AND": ["[and,matchers]"], 
     "&": ["[and,matchers]"], 
     ">": []}, 
  "?[composedVariable]" : {
     ".": ["[composedVariable]"], 
     "]": [], 
     "MATCHING": []}, 
  "?a" : {
     "a": ["a"], 
     "STRING_OR_VAR": []}, 
  "?allowedIdentifiers" : {
     "STRING_OR_VAR": ["allowedIdentifiers"], 
     "a": ["allowedIdentifiers"], 
     "AS": ["allowedIdentifiers"], 
     ":": []}, 
  "[+,STRINGOPERATOR]" : {
     "+": ["+","STRINGOPERATOR"]}, 
  "[,,replacedStrings]" : {
     ",": [",","replacedStrings"]}, 
  "[.,allowedIdentifiers]" : {
     ".": [".","allowedIdentifiers"]}, 
  "[<,?allowedIdentifiers,:,allowedIdentifiers,>]" : {
     "<": ["<","?allowedIdentifiers",":","allowedIdentifiers",">"]}, 
  "[<,allowedIdentifiers,>]" : {
     "<": ["<","allowedIdentifiers",">"]}, 
  "[@,?allowedIdentifiers,:,allowedIdentifiers]" : {
     "@": ["@","?allowedIdentifiers",":","allowedIdentifiers"]}, 
  "[BY,DIGITS]" : {
     "BY": ["BY","DIGITS"]}, 
  "[STRINGOPERATOR,+]" : {
     "STRINGOPERATOR": ["STRINGOPERATOR","+"]}, 
  "[TO,DIGITS]" : {
     "TO": ["TO","DIGITS"]}, 
  "[[,allowedIdentifiers,?[composedVariable],matching,]]" : {
     "[": ["[","allowedIdentifiers","?[composedVariable]","matching","]"]}, 
  "[allowedIdentifiers]" : {
     "STRING_OR_VAR": ["allowedIdentifiers"], 
     "a": ["allowedIdentifiers"], 
     "AS": ["allowedIdentifiers"]}, 
  "[and,matchers]" : {
     "AND": ["and","matchers"], 
     "&": ["and","matchers"]}, 
  "[composedVariable]" : {
     ".": ["composedVariable"]}, 
  "[or([STRING_OR_VAR,.,[,],@,a,AS,$])]" : {
     "STRING_OR_VAR": ["or([STRING_OR_VAR,.,[,],@,a,AS,$])"], 
     ".": ["or([STRING_OR_VAR,.,[,],@,a,AS,$])"], 
     "[": ["or([STRING_OR_VAR,.,[,],@,a,AS,$])"], 
     "]": ["or([STRING_OR_VAR,.,[,],@,a,AS,$])"], 
     "@": ["or([STRING_OR_VAR,.,[,],@,a,AS,$])"], 
     "a": ["or([STRING_OR_VAR,.,[,],@,a,AS,$])"], 
     "AS": ["or([STRING_OR_VAR,.,[,],@,a,AS,$])"], 
     "$": ["or([STRING_OR_VAR,.,[,],@,a,AS,$])"]}, 
  "[predicateObject,;]" : {
     "a": ["predicateObject",";"], 
     ":": ["predicateObject",";"], 
     "STRING_OR_VAR": ["predicateObject",";"]}, 
  "allowedIdentifiers" : {
     "STRING_OR_VAR": ["?AS","?a","STRING_OR_VAR"], 
     "a": ["?AS","?a","STRING_OR_VAR"], 
     "AS": ["?AS","?a","STRING_OR_VAR"]}, 
  "allowedStrings" : {
     "STRING_OR_VAR": ["+[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     ".": ["+[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     "[": ["+[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     "]": ["+[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     "@": ["+[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     "a": ["+[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     "AS": ["+[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"], 
     "$": ["+[or([STRING_OR_VAR,.,[,],@,a,AS,$])]"]}, 
  "and" : {
     "AND": ["or([AND,&])"], 
     "&": ["or([AND,&])"]}, 
  "autoincrement" : {
     "AUTOINCREMENT": ["AUTOINCREMENT","allowedIdentifiers","<","?[STRINGOPERATOR,+]","DIGITS","?[TO,DIGITS]","?[BY,DIGITS]","?[+,STRINGOPERATOR]",">"]}, 
  "composedVariable" : {
     ".": ["+[.,allowedIdentifiers]"]}, 
  "datatype" : {
     "STRING_OR_VAR": ["STRING_OR_VAR",":","STRING_OR_VAR"], 
     ";": [], 
     "@": []}, 
  "decl" : {
     "SOURCE": ["or([source,prefix,expression,matcher,iterator,autoincrement])"], 
     "PREFIX": ["or([source,prefix,expression,matcher,iterator,autoincrement])"], 
     "EXPRESSION": ["or([source,prefix,expression,matcher,iterator,autoincrement])"], 
     "MATCHER": ["or([source,prefix,expression,matcher,iterator,autoincrement])"], 
     "ITERATOR": ["or([source,prefix,expression,matcher,iterator,autoincrement])"], 
     "AUTOINCREMENT": ["or([source,prefix,expression,matcher,iterator,autoincrement])"]}, 
  "exp" : {
     "STRING_OR_VAR": ["expOperation"], 
     "a": ["expOperation"], 
     "AS": ["expOperation"], 
     ">": ["expOperation"]}, 
  "expOperation" : {
     "STRING_OR_VAR": ["allowedIdentifiers","composedVariable","or([unions,expOperations])"], 
     "a": ["allowedIdentifiers","composedVariable","or([unions,expOperations])"], 
     "AS": ["allowedIdentifiers","composedVariable","or([unions,expOperations])"], 
     ">": []}, 
  "expOperations" : {
     "+": ["+","STRINGOPERATOR","+","allowedIdentifiers","composedVariable","unions"]}, 
  "expression" : {
     "EXPRESSION": ["EXPRESSION","allowedIdentifiers","<","exp",">"]}, 
  "field" : {
     "FIELD": ["FIELD","allowedIdentifiers","<","allowedStrings",">"]}, 
  "iterator" : {
     "ITERATOR": ["ITERATOR","allowedIdentifiers","<","queryClause",">","{","+field","*nestedIterator","}"]}, 
  "langtag" : {
     "@": ["@","allowedIdentifiers"], 
     ";": []}, 
  "literalValue" : {
     "STRING_OR_VAR": ["or([allowedIdentifiers])"], 
     "a": ["or([allowedIdentifiers])"], 
     "AS": ["or([allowedIdentifiers])"]}, 
  "literalValueObjectElementStart" : {
     ":": ["?STRING_OR_VAR",":","or([literalValue,objectElement])"], 
     "STRING_OR_VAR": ["?STRING_OR_VAR",":","or([literalValue,objectElement])"]}, 
  "matcher" : {
     "MATCHER": ["MATCHER","allowedIdentifiers","<","matchers",">"]}, 
  "matchers" : {
     "STRINGOPERATOR": ["replacedStrings","AS","or([allowedIdentifiers,STRINGOPERATOR,DIGITS])","?[and,matchers]"], 
     "DIGITS": ["replacedStrings","AS","or([allowedIdentifiers,STRINGOPERATOR,DIGITS])","?[and,matchers]"], 
     "STRING_OR_VAR": ["replacedStrings","AS","or([allowedIdentifiers,STRINGOPERATOR,DIGITS])","?[and,matchers]"], 
     "a": ["replacedStrings","AS","or([allowedIdentifiers,STRINGOPERATOR,DIGITS])","?[and,matchers]"], 
     "AS": ["replacedStrings","AS","or([allowedIdentifiers,STRINGOPERATOR,DIGITS])","?[and,matchers]"]}, 
  "matching" : {
     "MATCHING": ["MATCHING","allowedIdentifiers"], 
     "]": []}, 
  "nestedIterator" : {
     "ITERATOR": ["ITERATOR","allowedIdentifiers","<","allowedStrings",">","{","+field","*nestedIterator","}"]}, 
  "objectElement" : {
     "[": ["or([[[,allowedIdentifiers,?[composedVariable],matching,]],STRINGOPERATOR])"], 
     "STRINGOPERATOR": ["or([[[,allowedIdentifiers,?[composedVariable],matching,]],STRINGOPERATOR])"]}, 
  "or([AND,&])" : {
     "AND": ["AND"], 
     "&": ["&"]}, 
  "or([STRING_OR_VAR,.,[,],@,a,AS,$])" : {
     "STRING_OR_VAR": ["STRING_OR_VAR"], 
     ".": ["."], 
     "[": ["["], 
     "]": ["]"], 
     "@": ["@"], 
     "a": ["a"], 
     "AS": ["AS"], 
     "$": ["$"]}, 
  "or([[@,?allowedIdentifiers,:,allowedIdentifiers],[<,?allowedIdentifiers,:,allowedIdentifiers,>]])" : {
     "@": ["[@,?allowedIdentifiers,:,allowedIdentifiers]"], 
     "<": ["[<,?allowedIdentifiers,:,allowedIdentifiers,>]"]}, 
  "or([[[,allowedIdentifiers,?[composedVariable],matching,]],STRINGOPERATOR])" : {
     "[": ["[[,allowedIdentifiers,?[composedVariable],matching,]]"], 
     "STRINGOPERATOR": ["STRINGOPERATOR"]}, 
  "or([a,literalValueObjectElementStart])" : {
     "a": ["a"], 
     ":": ["literalValueObjectElementStart"], 
     "STRING_OR_VAR": ["literalValueObjectElementStart"]}, 
  "or([allowedIdentifiers,STRINGOPERATOR,DIGITS])" : {
     "STRING_OR_VAR": ["allowedIdentifiers"], 
     "a": ["allowedIdentifiers"], 
     "AS": ["allowedIdentifiers"], 
     "STRINGOPERATOR": ["STRINGOPERATOR"], 
     "DIGITS": ["DIGITS"]}, 
  "or([allowedIdentifiers])" : {
     "STRING_OR_VAR": ["allowedIdentifiers"], 
     "a": ["allowedIdentifiers"], 
     "AS": ["allowedIdentifiers"]}, 
  "or([literalValue,objectElement])" : {
     "STRING_OR_VAR": ["literalValue"], 
     "a": ["literalValue"], 
     "AS": ["literalValue"], 
     "[": ["objectElement"], 
     "STRINGOPERATOR": ["objectElement"]}, 
  "or([objectElement,shapeLink,literalValueObjectElementStart])" : {
     "[": ["objectElement"], 
     "STRINGOPERATOR": ["objectElement"], 
     "@": ["shapeLink"], 
     "<": ["shapeLink"], 
     ":": ["literalValueObjectElementStart"], 
     "STRING_OR_VAR": ["literalValueObjectElementStart"]}, 
  "or([predicate,[<,allowedIdentifiers,>]])" : {
     "a": ["predicate"], 
     ":": ["predicate"], 
     "STRING_OR_VAR": ["predicate"], 
     "<": ["[<,allowedIdentifiers,>]"]}, 
  "or([source,prefix,expression,matcher,iterator,autoincrement])" : {
     "SOURCE": ["source"], 
     "PREFIX": ["prefix"], 
     "EXPRESSION": ["expression"], 
     "MATCHER": ["matcher"], 
     "ITERATOR": ["iterator"], 
     "AUTOINCREMENT": ["autoincrement"]}, 
  "or([unions,expOperations])" : {
     "UNION": ["unions"], 
     "JOIN": ["unions"], 
     "+": ["expOperations"], 
     ">": ["unions"]}, 
  "predicate" : {
     "a": ["or([a,literalValueObjectElementStart])"], 
     ":": ["or([a,literalValueObjectElementStart])"], 
     "STRING_OR_VAR": ["or([a,literalValueObjectElementStart])"]}, 
  "predicateObject" : {
     "a": ["predicate","or([objectElement,shapeLink,literalValueObjectElementStart])","datatype","langtag"], 
     ":": ["predicate","or([objectElement,shapeLink,literalValueObjectElementStart])","datatype","langtag"], 
     "STRING_OR_VAR": ["predicate","or([objectElement,shapeLink,literalValueObjectElementStart])","datatype","langtag"]}, 
  "prefix" : {
     "PREFIX": ["PREFIX","?[allowedIdentifiers]",":","<","URL",">"]}, 
  "queryClause" : {
     "JSONPATH": ["JSONPATH","allowedStrings"], 
     "XMLPATH": ["XMLPATH","allowedStrings"], 
     "CSVPERROW": ["CSVPERROW"]}, 
  "replacedStrings" : {
     "STRINGOPERATOR": ["or([allowedIdentifiers,STRINGOPERATOR,DIGITS])","?[,,replacedStrings]"], 
     "DIGITS": ["or([allowedIdentifiers,STRINGOPERATOR,DIGITS])","?[,,replacedStrings]"], 
     "STRING_OR_VAR": ["or([allowedIdentifiers,STRINGOPERATOR,DIGITS])","?[,,replacedStrings]"], 
     "a": ["or([allowedIdentifiers,STRINGOPERATOR,DIGITS])","?[,,replacedStrings]"], 
     "AS": ["or([allowedIdentifiers,STRINGOPERATOR,DIGITS])","?[,,replacedStrings]"]}, 
  "shape" : {
     "a": ["tripleElement","?[allowedIdentifiers]",":","[","allowedIdentifiers","?[composedVariable]","]","{","+[predicateObject,;]","}"], 
     ":": ["tripleElement","?[allowedIdentifiers]",":","[","allowedIdentifiers","?[composedVariable]","]","{","+[predicateObject,;]","}"], 
     "STRING_OR_VAR": ["tripleElement","?[allowedIdentifiers]",":","[","allowedIdentifiers","?[composedVariable]","]","{","+[predicateObject,;]","}"], 
     "<": ["tripleElement","?[allowedIdentifiers]",":","[","allowedIdentifiers","?[composedVariable]","]","{","+[predicateObject,;]","}"]}, 
  "shapeLink" : {
     "@": ["or([[@,?allowedIdentifiers,:,allowedIdentifiers],[<,?allowedIdentifiers,:,allowedIdentifiers,>]])"], 
     "<": ["or([[@,?allowedIdentifiers,:,allowedIdentifiers],[<,?allowedIdentifiers,:,allowedIdentifiers,>]])"]}, 
  "shexML" : {
     "$": ["*decl","*shape","$"], 
     "a": ["*decl","*shape","$"], 
     ":": ["*decl","*shape","$"], 
     "STRING_OR_VAR": ["*decl","*shape","$"], 
     "<": ["*decl","*shape","$"], 
     "SOURCE": ["*decl","*shape","$"], 
     "PREFIX": ["*decl","*shape","$"], 
     "EXPRESSION": ["*decl","*shape","$"], 
     "MATCHER": ["*decl","*shape","$"], 
     "ITERATOR": ["*decl","*shape","$"], 
     "AUTOINCREMENT": ["*decl","*shape","$"]}, 
  "source" : {
     "SOURCE": ["SOURCE","allowedIdentifiers","<","URL",">"]}, 
  "tripleElement" : {
     "a": ["or([predicate,[<,allowedIdentifiers,>]])"], 
     ":": ["or([predicate,[<,allowedIdentifiers,>]])"], 
     "STRING_OR_VAR": ["or([predicate,[<,allowedIdentifiers,>]])"], 
     "<": ["or([predicate,[<,allowedIdentifiers,>]])"]}, 
  "union" : {
     "STRING_OR_VAR": ["allowedIdentifiers","composedVariable","or([unions,expOperations])"], 
     "a": ["allowedIdentifiers","composedVariable","or([unions,expOperations])"], 
     "AS": ["allowedIdentifiers","composedVariable","or([unions,expOperations])"]}, 
  "unions" : {
     "UNION": ["UNION","union"], 
     "JOIN": ["JOIN","union"], 
     ">": []}
},

keywords:/^(PREFIX|SOURCE|ITERATOR|FIELD|AUTOINCREMENT|TO|BY|AND|AS|EXPRESSION|MATCHER|UNION|JOIN|MATCHING)/i ,

punct:/^(<|>|\+|\&|a|@|\.|\{|\}|;|,|:|\[|\]|\$)/ ,

startSymbol:"shexML",
acceptEmpty:true,
}