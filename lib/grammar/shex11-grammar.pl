/*
ShEx grammar rules based on the Last Call Working Draft of 03/03/2017:
  https://github.com/shexSpec/grammar/blob/shex2.1/bnf

Be careful with grammar notation - it is EBNF in prolog syntax!
[...] lists always represent sequence.
or can be used as binary operator or n-ary prefix term - do not put [...] 
inside unless you want sequence as a single disjunct.
*, +, ? - generally used as 1-ary terms 
stephen.cresswell@tso.co.uk
*/

% We need to be careful with end-of-input marker $
% Since we never actually receive this from Codemirror, 
% we can't have it appear on RHS of deployed rules.
% However, we do need it to check whether rules *could* precede 
% end-of-input, so use it with top-level

:-dynamic '==>'/2.

shexML ==> [*(decl), *(shape), $].

decl ==> [or(source, prefix, expression, matcher, iterator, autoincrement)].

prefix ==> ['PREFIX', ?([allowedIdentifiers]), ':', '<', 'URL', '>'].

source ==> ['SOURCE', allowedIdentifiers, '<', 'URL', '>'].

iterator ==> ['ITERATOR', allowedIdentifiers, '<', queryClause, '>', '{', +(field), *(nestedIterator), '}'].

nestedIterator ==> ['ITERATOR', allowedIdentifiers, '<', allowedStrings, '>', '{', +(field), *(nestedIterator), '}'].

field ==> ['FIELD', allowedIdentifiers, '<', allowedStrings, '>'].

autoincrement ==> ['AUTOINCREMENT', allowedIdentifiers, '<', ?(['STRINGOPERATOR', '+']), 'DIGITS', ?(['TO', 'DIGITS']), ?(['BY', 'DIGITS']), ?(['+', 'STRINGOPERATOR']), '>'].

expression ==> ['EXPRESSION', allowedIdentifiers, '<', exp, '>'] .

matcher ==> ['MATCHER', allowedIdentifiers, '<', matchers, '>'] .

matchers ==> [replacedStrings, 'AS', or(allowedIdentifiers, 'STRINGOPERATOR', 'DIGITS'), ?([and, matchers])]  .

replacedStrings ==> [or(allowedIdentifiers, 'STRINGOPERATOR', 'DIGITS'), ?([',', replacedStrings])] .

allowedStrings ==> [+([or('STRING_OR_VAR', '.', '[', ']', '@', 'a', 'AS', '$')])] .

allowedIdentifiers ==> [?('AS'), ?('a'), 'STRING_OR_VAR'] .

exp ==> [expOperation] .

expOperation ==> [allowedIdentifiers, composedVariable, or(unions, expOperations)] .
expOperation ==> [] .

expOperations ==> ['+', 'STRINGOPERATOR', '+', allowedIdentifiers, composedVariable, unions] .

composedVariable ==> [+(['.', allowedIdentifiers])] .

queryClause ==> ['JSONPATH', allowedStrings] .
queryClause ==> ['XMLPATH', allowedStrings] .
queryClause ==> ['CSVPERROW'] .

union ==> [allowedIdentifiers, composedVariable, or(unions, expOperations)] .
unions ==> ['UNION', union] .
unions ==> ['JOIN', union] .
unions ==> [] .

shape ==> [tripleElement, ?([allowedIdentifiers]), ':', '[', allowedIdentifiers, ?([composedVariable]), ']', '{', +([predicateObject, ';']), '}'] .

predicateObject ==> [predicate, or(objectElement, shapeLink, literalValueObjectElementStart), datatype, langtag] .

literalValueObjectElementStart ==> [?('STRING_OR_VAR'), ':', or(literalValue, objectElement)] .

objectElement ==> [or(['[', allowedIdentifiers, ?([composedVariable]), matching, ']'], 'STRINGOPERATOR')] .

shapeLink ==> [or(['@', ?(allowedIdentifiers), ':', allowedIdentifiers], ['<', ?(allowedIdentifiers), ':', allowedIdentifiers, '>'])] .

predicate ==> [or('a', literalValueObjectElementStart)] .

literalValue ==> [or(allowedIdentifiers)] .

tripleElement ==> [or(predicate, ['<', allowedIdentifiers, '>'])] .

matching ==> ['MATCHING', allowedIdentifiers] .
matching ==> [] .

datatype ==> ['STRING_OR_VAR', ':', 'STRING_OR_VAR'] .
datatype ==> [] .

langtag ==> ['@', allowedIdentifiers] .
langtag ==> [] .

and ==> [or('AND', '&')] .

% tens defined by regular expressions elsewhere
% RDF_TYPE ten now is harcoded in the rules
tm_regex([
'URL',
'DIGITS',
'STRING_OR_VAR',
'STRINGOPERATOR',
'JSONPATH',
'XMLPATH',
'CSVPERROW'
]).

% Terminals where name of terminal is uppercased ten content
tm_keywords([
'PREFIX',
'SOURCE',
'ITERATOR',
'FIELD',
'AUTOINCREMENT',
'TO',
'BY',
'AND',
'AS',
'EXPRESSION',
'MATCHER',
'UNION',
'JOIN',
'MATCHING'
]).

% Other tens representing fixed, case sensitive, strings
% Care! order longer tens first - e.g. IRI_REF, <=, <
% e.g. >=, >
% e.g. NIL, '('
% e.g. ANON, [
% e.g. DOUBLE, DECIMAL, INTEGER
% e.g. INTEGER_POSITIVE, PLUS
tm_punct([ 
'<' = '<',
'>' = '>',
'+' = '\\+',
'&' = '\\&',
'a' = 'a',
'@' = '@',
'.'= '\\.',
'{'= '\\{',
'}'= '\\}',
';'= ';',
','=',',
':'=':',
'['= '\\[',
']'= '\\]',
'$' = '\\$'
]).
