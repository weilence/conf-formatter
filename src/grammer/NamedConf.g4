grammar NamedConf;
prog: (statement)* EOF;
statement: value+ ';';
value: (IDENTIFIER | STRING | acl | struct);
struct: '{' statement* '}';
acl: '!'? STRING;

IDENTIFIER: [a-zA-Z0-9-._/*]+;
STRING: '"' .*? '"';
WS: ( '\t' | ' ')+ -> skip;
LINE_COMMENT: ('//' .*? '\r'? '\n' | '#' .*? '\r'? '\n') -> channel(HIDDEN);
INLINE_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);
NEWLINE: [\r\n]+ -> skip;