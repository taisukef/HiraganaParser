"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roman = exports.hiraganaToRomans = void 0;
const config_js_1 = require("./config.js");
let keyConfigs = config_js_1.KEY_CONFIGS;
/**
 * Romanのツリー構造を返す
 */
const hiraganaToRomans = (hiraganas, configs) => {
    keyConfigs = configs ?? config_js_1.KEY_CONFIGS;
    // Romanのツリー構造を作っていこう
    const startRoman = new Roman('');
    addNextChilds(hiraganas, startRoman);
    return startRoman;
};
exports.hiraganaToRomans = hiraganaToRomans;
const addNextChilds = (remainingHiraganas, parentRoman, duplicateFirstLetter) => {
    // 空文字の場合は最後の文字なので何もしない
    if (!remainingHiraganas) {
        return;
    }
    // 「っ」の時はその次の文字を重ねたやつもいける
    if (remainingHiraganas.startsWith('っ')) {
        const nextHiraganas = remainingHiraganas.slice(1);
        addNextChilds(nextHiraganas, parentRoman, true);
    }
    // 「ん」の時は次がnから始まらないならn一個でいける
    if (isArrowOneNInput(remainingHiraganas)) {
        const nextRoman = new Roman('n');
        parentRoman.addChild(nextRoman);
        const nextHiraganas = remainingHiraganas.slice(1);
        addNextChilds(nextHiraganas, nextRoman, false);
    }
    const matchKeyConfigs = keyConfigs.filter(keyConfig => remainingHiraganas.startsWith(keyConfig.key));
    matchKeyConfigs.forEach(matchKeyConfig => {
        matchKeyConfig.origins.forEach(origin => {
            const nextRoman = duplicateFirstLetter ? new Roman(origin[0] + origin) : new Roman(origin);
            parentRoman.addChild(nextRoman);
            const nextHiraganas = remainingHiraganas.slice(matchKeyConfig.key.length);
            addNextChilds(nextHiraganas, nextRoman);
        });
    });
};
// 残りのひらがなてきに、「n」一つで「ん」を入力できるかどうか
const isArrowOneNInput = (remainingHiraganas) => {
    // 「ん」から始まってない場合はだめ
    if (!remainingHiraganas.startsWith('ん')) {
        return false;
    }
    const nextHiraganas = remainingHiraganas.slice(1);
    if (!nextHiraganas)
        return false;
    const matchKeyConfigs = keyConfigs.filter(keyConfig => nextHiraganas.startsWith(keyConfig.key));
    return !matchKeyConfigs.some(matchKeyConfig => matchKeyConfig.origins.some(origin => origin.startsWith('n')));
};
class Roman {
    roma;
    childs = [];
    parent;
    constructor(roma) {
        this.roma = roma;
    }
    addChild(roman) {
        this.childs.push(roman);
        roman.parent = this;
    }
}
exports.Roman = Roman;
