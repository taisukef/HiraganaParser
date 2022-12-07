import { KEY_CONFIGS } from "./config.js";
import { hiraganaToRomans } from "./parser.js";
/**
 * ひらがなからローマ字入力できる組み合わせを全部返す
 */
export const hiraganaToRomas = (hiraganas, configs = KEY_CONFIGS) => {
    const roman = hiraganaToRomans(hiraganas, configs);
    const answers = makeAnswers(roman);
    return answers;
};
/**
 * Romanのツリー構造を後ろに辿っていって、ローマ字入力できる組み合わせを作る
 */
export const makeAnswers = (roman, answers) => {
    if (!answers) {
        answers = [];
    }
    roman.childs.forEach(child => {
        makeAnswers(child, answers);
    });
    if (roman.childs.length === 0) {
        makeRomas(roman, '', answers);
    }
    return answers;
};
// Romanのツリー構造を後ろから前に辿っていってローマ字の並びを作る
const makeRomas = (roman, roma, answers) => {
    roma = roman.roma + roma;
    if (roman.parent) {
        makeRomas(roman.parent, roma, answers);
    }
    else {
        answers.push(roma);
    }
};
