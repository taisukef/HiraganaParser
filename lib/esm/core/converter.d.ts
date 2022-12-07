import { Roman } from "./parser.js";
import { KeyConfigs } from "./parser.interface.js";
/**
 * ひらがなからローマ字入力できる組み合わせを全部返す
 */
export declare const hiraganaToRomas: (hiraganas: string, configs?: KeyConfigs) => string[];
/**
 * Romanのツリー構造を後ろに辿っていって、ローマ字入力できる組み合わせを作る
 */
export declare const makeAnswers: (roman: Roman, answers?: string[]) => string[];
//# sourceMappingURL=converter.d.ts.map