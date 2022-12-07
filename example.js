//import { GameParser } from "./HiraganaParser.js";
import { GameParser } from "./lib/esm/index.js";

const parser = new GameParser({ hiraganas: 'きんにく' })
console.log(parser.input('k'))
console.log(parser.input('n'))
console.log(parser.input('i'))
console.log(parser.isComplete())
console.log(parser.inputedRoma)
console.log(parser.notInputedRoma)
