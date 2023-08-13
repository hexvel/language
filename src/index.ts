import Lexer from "./Lexer";
import Parser from "./Parser";

const code = `
сумма РАВНО 5;
суммадва РАВНО сумма УМНОЖИТЬ 3;
КОНСОЛЬ суммадва;
`;

const lexer = new Lexer(code);

lexer.lexAnalysis();

const parser = new Parser(lexer.tokenList);

const rootNode = parser.parseCode();

parser.run(rootNode);
