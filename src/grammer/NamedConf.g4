grammar NamedConf;
prog: (statement)* EOF;
statement: value+ ';';
value: (IDENTIFIER | STRING | acl | struct);
struct: '{' statement* '}';
acl: '!'? STRING;

IDENTIFIER: [a-zA-Z0-9-._/]+;
STRING: '"' .*? '"';
WS: ( '\t' | ' ')+ -> skip;
COMMENT: (
		'//' .*? '\r'? '\n'
		| '#' .*? '\r'? '\n'
		| '/*' .*? '*/'
	) -> channel(HIDDEN);
NEWLINE: [\r\n]+ -> skip;