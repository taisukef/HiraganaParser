"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameParser = void 0;
const converter_js_1 = require("./converter.js");
const parser_js_1 = require("./parser.js");
/**
 * タイピングゲーム向けのパーサー
 * パースしたいひらがなを引数に渡して初期化します
 */
class GameParser {
    /** パーサーのオプション */
    options;
    roman;
    answers;
    _inputedRoma = '';
    get inputedRoma() {
        return this._inputedRoma;
    }
    get notInputedRoma() {
        const answer = this.answers.find(answer => answer.startsWith(this._inputedRoma));
        if (answer) {
            return answer.replace(this._inputedRoma, '');
        }
        return answer ?? '';
    }
    constructor(options) {
        this.options = options;
        this.roman = (0, parser_js_1.hiraganaToRomans)(options.hiraganas, options.configs);
        this.answers = (0, converter_js_1.makeAnswers)(this.roman).sort((a, b) => { return a.length - b.length; });
    }
    /**
     * 次の文字を入力する、入力を受け入れたらtrueを返す
     */
    input = (char) => {
        const newInputedString = `${this._inputedRoma}${char}`;
        const canInput = this.answers.some(answer => answer.startsWith(newInputedString));
        if (canInput) {
            this._inputedRoma = newInputedString;
        }
        return canInput;
    };
    /**
     * 入力が完了しているかどうか
     */
    isComplete = () => {
        return this.answers.some(answer => answer === this._inputedRoma);
    };
}
exports.GameParser = GameParser;
