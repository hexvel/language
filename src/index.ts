import Lexer from "./Lexer";
import Parser from "./Parser";

const code = `
число РАВНО 200;
КОНСОЛЬ число ПЛЮС 45 ПЛЮС (235 МИНУС 456);
КОНСОЛЬ число;  
    `;

const lexer = new Lexer(code);

lexer.lexAnalysis();

const parser = new Parser(lexer.tokenList);

const rootNode = parser.parseCode();

parser.run(rootNode);
