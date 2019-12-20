
top_symbol(shexML).
output_file('_tokenizer-table.js').

js_vars([
  startSymbol='"shexML"',
  acceptEmpty=true
]).

:-reconsult(gen_ll1).
:-reconsult('../shex11-grammar.pl').
