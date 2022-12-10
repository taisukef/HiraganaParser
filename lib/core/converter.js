"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAnswers = exports.hiraganaToRomas = void 0;
const config_js_1 = require("./config.js");
const parser_js_1 = require("./parser.js");
/**
 * ひらがなからローマ字入力できる組み合わせを全部返す
 */
const hiraganaToRomas = (hiraganas, configs = config_js_1.KEY_CONFIGS) => {
    const roman = (0, parser_js_1.hiraganaToRomans)(hiraganas, configs);
    const answers = (0, exports.makeAnswers)(roman);
    return answers;
};
exports.hiraganaToRomas = hiraganaToRomas;
/**
 * Romanのツリー構造を後ろに辿っていって、ローマ字入力できる組み合わせを作る
 */
const makeAnswers = (roman, answers) => {
    if (!answers) {
        answers = [];
    }
    roman.childs.forEach(child => {
        (0, exports.makeAnswers)(child, answers);
    });
    if (roman.childs.length === 0) {
        makeRomas(roman, '', answers);
    }
    return answers;
};
exports.makeAnswers = makeAnswers;
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
