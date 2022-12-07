// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const KEY_CONFIGS = [
    {
        key: "あ",
        origins: [
            "a"
        ]
    },
    {
        key: "い",
        origins: [
            "i",
            "yi"
        ]
    },
    {
        key: "う",
        origins: [
            "u",
            "wu",
            "whu"
        ]
    },
    {
        key: "え",
        origins: [
            "e"
        ]
    },
    {
        key: "お",
        origins: [
            "o"
        ]
    },
    {
        key: "か",
        origins: [
            "ka",
            "ca"
        ]
    },
    {
        key: "き",
        origins: [
            "ki"
        ]
    },
    {
        key: "く",
        origins: [
            "ku",
            "cu",
            "qu"
        ]
    },
    {
        key: "け",
        origins: [
            "ke"
        ]
    },
    {
        key: "こ",
        origins: [
            "ko",
            "co"
        ]
    },
    {
        key: "さ",
        origins: [
            "sa"
        ]
    },
    {
        key: "し",
        origins: [
            "si",
            "ci",
            "shi"
        ]
    },
    {
        key: "す",
        origins: [
            "su"
        ]
    },
    {
        key: "せ",
        origins: [
            "se",
            "ce"
        ]
    },
    {
        key: "そ",
        origins: [
            "so"
        ]
    },
    {
        key: "た",
        origins: [
            "ta"
        ]
    },
    {
        key: "ち",
        origins: [
            "ti",
            "chi"
        ]
    },
    {
        key: "つ",
        origins: [
            "tu",
            "tsu"
        ]
    },
    {
        key: "て",
        origins: [
            "te"
        ]
    },
    {
        key: "と",
        origins: [
            "to"
        ]
    },
    {
        key: "な",
        origins: [
            "na"
        ]
    },
    {
        key: "に",
        origins: [
            "ni"
        ]
    },
    {
        key: "ぬ",
        origins: [
            "nu"
        ]
    },
    {
        key: "ね",
        origins: [
            "ne"
        ]
    },
    {
        key: "の",
        origins: [
            "no"
        ]
    },
    {
        key: "は",
        origins: [
            "ha"
        ]
    },
    {
        key: "ひ",
        origins: [
            "hi"
        ]
    },
    {
        key: "ふ",
        origins: [
            "hu",
            "fu"
        ]
    },
    {
        key: "へ",
        origins: [
            "he"
        ]
    },
    {
        key: "ほ",
        origins: [
            "ho"
        ]
    },
    {
        key: "ま",
        origins: [
            "ma"
        ]
    },
    {
        key: "み",
        origins: [
            "mi"
        ]
    },
    {
        key: "む",
        origins: [
            "mu"
        ]
    },
    {
        key: "め",
        origins: [
            "me"
        ]
    },
    {
        key: "も",
        origins: [
            "mo"
        ]
    },
    {
        key: "や",
        origins: [
            "ya"
        ]
    },
    {
        key: "ゆ",
        origins: [
            "yu"
        ]
    },
    {
        key: "よ",
        origins: [
            "yo"
        ]
    },
    {
        key: "ら",
        origins: [
            "ra"
        ]
    },
    {
        key: "り",
        origins: [
            "ri"
        ]
    },
    {
        key: "る",
        origins: [
            "ru"
        ]
    },
    {
        key: "れ",
        origins: [
            "re"
        ]
    },
    {
        key: "ろ",
        origins: [
            "ro"
        ]
    },
    {
        key: "わ",
        origins: [
            "wa"
        ]
    },
    {
        key: "を",
        origins: [
            "wo"
        ]
    },
    {
        key: "ん",
        origins: [
            "nn",
            "n'",
            "xn"
        ]
    },
    {
        key: "が",
        origins: [
            "ga"
        ]
    },
    {
        key: "ぎ",
        origins: [
            "gi"
        ]
    },
    {
        key: "ぐ",
        origins: [
            "gu"
        ]
    },
    {
        key: "げ",
        origins: [
            "ge"
        ]
    },
    {
        key: "ご",
        origins: [
            "go"
        ]
    },
    {
        key: "ざ",
        origins: [
            "za"
        ]
    },
    {
        key: "じ",
        origins: [
            "zi",
            "ji"
        ]
    },
    {
        key: "ず",
        origins: [
            "zu"
        ]
    },
    {
        key: "ぜ",
        origins: [
            "ze"
        ]
    },
    {
        key: "ぞ",
        origins: [
            "zo"
        ]
    },
    {
        key: "だ",
        origins: [
            "da"
        ]
    },
    {
        key: "ぢ",
        origins: [
            "di"
        ]
    },
    {
        key: "づ",
        origins: [
            "du"
        ]
    },
    {
        key: "で",
        origins: [
            "de"
        ]
    },
    {
        key: "ど",
        origins: [
            "do"
        ]
    },
    {
        key: "ば",
        origins: [
            "ba"
        ]
    },
    {
        key: "び",
        origins: [
            "bi"
        ]
    },
    {
        key: "ぶ",
        origins: [
            "bu"
        ]
    },
    {
        key: "べ",
        origins: [
            "be"
        ]
    },
    {
        key: "ぼ",
        origins: [
            "bo"
        ]
    },
    {
        key: "ぱ",
        origins: [
            "pa"
        ]
    },
    {
        key: "ぴ",
        origins: [
            "pi"
        ]
    },
    {
        key: "ぷ",
        origins: [
            "pu"
        ]
    },
    {
        key: "ぺ",
        origins: [
            "pe"
        ]
    },
    {
        key: "ぽ",
        origins: [
            "po"
        ]
    },
    {
        key: "ぁ",
        origins: [
            "la",
            "xa"
        ]
    },
    {
        key: "ぃ",
        origins: [
            "li",
            "xi"
        ]
    },
    {
        key: "ぅ",
        origins: [
            "lu",
            "xu"
        ]
    },
    {
        key: "ぇ",
        origins: [
            "le",
            "xe"
        ]
    },
    {
        key: "ぉ",
        origins: [
            "lo",
            "xo"
        ]
    },
    {
        key: "ゃ",
        origins: [
            "lya",
            "xya"
        ]
    },
    {
        key: "ゅ",
        origins: [
            "lyu",
            "xyu"
        ]
    },
    {
        key: "ょ",
        origins: [
            "lyo",
            "xyo"
        ]
    },
    {
        key: "ヵ",
        origins: [
            "lka",
            "xka"
        ]
    },
    {
        key: "ヶ",
        origins: [
            "lke",
            "xke"
        ]
    },
    {
        key: "ゎ",
        origins: [
            "lwa",
            "xwa"
        ]
    },
    {
        key: "っ",
        origins: [
            "ltu",
            "xtu",
            "ltsu",
            "xtsu"
        ]
    },
    {
        key: "ゔ",
        origins: [
            "vu"
        ]
    },
    {
        key: "ー",
        origins: [
            "-"
        ]
    },
    {
        key: "？",
        origins: [
            "?"
        ]
    },
    {
        key: "！",
        origins: [
            "!"
        ]
    },
    {
        key: "、",
        origins: [
            ",",
            "、"
        ]
    },
    {
        key: "。",
        origins: [
            ".",
            "。"
        ]
    },
    {
        key: "うぁ",
        origins: [
            "wha"
        ]
    },
    {
        key: "うぃ",
        origins: [
            "whi",
            "wi"
        ]
    },
    {
        key: "うぇ",
        origins: [
            "whe",
            "we"
        ]
    },
    {
        key: "うぉ",
        origins: [
            "who"
        ]
    },
    {
        key: "うぉ",
        origins: [
            "who"
        ]
    },
    {
        key: "いぇ",
        origins: [
            "ye"
        ]
    },
    {
        key: "きゃ",
        origins: [
            "kya"
        ]
    },
    {
        key: "きぃ",
        origins: [
            "kyi"
        ]
    },
    {
        key: "きゅ",
        origins: [
            "kyu"
        ]
    },
    {
        key: "きぇ",
        origins: [
            "kye"
        ]
    },
    {
        key: "きょ",
        origins: [
            "kyo"
        ]
    },
    {
        key: "くゃ",
        origins: [
            "qya"
        ]
    },
    {
        key: "くゅ",
        origins: [
            "qyu"
        ]
    },
    {
        key: "くょ",
        origins: [
            "qyo"
        ]
    },
    {
        key: "くぁ",
        origins: [
            "qwa",
            "qa",
            "kwa"
        ]
    },
    {
        key: "くぃ",
        origins: [
            "qwi",
            "qi",
            "qyi"
        ]
    },
    {
        key: "くぅ",
        origins: [
            "qwu"
        ]
    },
    {
        key: "くぇ",
        origins: [
            "qwe",
            "qe",
            "qye"
        ]
    },
    {
        key: "くぉ",
        origins: [
            "qwo",
            "qo"
        ]
    },
    {
        key: "ぐぁ",
        origins: [
            "gwa"
        ]
    },
    {
        key: "ぐぃ",
        origins: [
            "gwi"
        ]
    },
    {
        key: "ぐぅ",
        origins: [
            "gwu"
        ]
    },
    {
        key: "ぐぇ",
        origins: [
            "gwe"
        ]
    },
    {
        key: "くぉ",
        origins: [
            "gwo"
        ]
    },
    {
        key: "しゃ",
        origins: [
            "sya",
            "sha"
        ]
    },
    {
        key: "しぃ",
        origins: [
            "syi"
        ]
    },
    {
        key: "しゅ",
        origins: [
            "syu",
            "shu"
        ]
    },
    {
        key: "しぇ",
        origins: [
            "sye",
            "she"
        ]
    },
    {
        key: "しょ",
        origins: [
            "syo",
            "sho"
        ]
    },
    {
        key: "すぁ",
        origins: [
            "swa"
        ]
    },
    {
        key: "すぃ",
        origins: [
            "swi"
        ]
    },
    {
        key: "すぅ",
        origins: [
            "swu"
        ]
    },
    {
        key: "すぇ",
        origins: [
            "swe"
        ]
    },
    {
        key: "すぉ",
        origins: [
            "swo"
        ]
    },
    {
        key: "ちゃ",
        origins: [
            "tya",
            "cya",
            "cha"
        ]
    },
    {
        key: "ちぃ",
        origins: [
            "tyi",
            "cyi"
        ]
    },
    {
        key: "ちゅ",
        origins: [
            "tyu",
            "cyu",
            "chu"
        ]
    },
    {
        key: "ちぇ",
        origins: [
            "tye",
            "cye",
            "che"
        ]
    },
    {
        key: "ちょ",
        origins: [
            "tyo",
            "cyo",
            "cho"
        ]
    },
    {
        key: "つぁ",
        origins: [
            "tsa"
        ]
    },
    {
        key: "つぃ",
        origins: [
            "tsi"
        ]
    },
    {
        key: "つぇ",
        origins: [
            "tse"
        ]
    },
    {
        key: "つぉ",
        origins: [
            "tso"
        ]
    },
    {
        key: "てぁ",
        origins: [
            "tha"
        ]
    },
    {
        key: "てぃ",
        origins: [
            "thi"
        ]
    },
    {
        key: "てゅ",
        origins: [
            "thu"
        ]
    },
    {
        key: "てぇ",
        origins: [
            "the"
        ]
    },
    {
        key: "てょ",
        origins: [
            "tho"
        ]
    },
    {
        key: "とぁ",
        origins: [
            "twa"
        ]
    },
    {
        key: "とぃ",
        origins: [
            "twi"
        ]
    },
    {
        key: "とぅ",
        origins: [
            "twu"
        ]
    },
    {
        key: "とぇ",
        origins: [
            "twe"
        ]
    },
    {
        key: "とぉ",
        origins: [
            "two"
        ]
    },
    {
        key: "にゃ",
        origins: [
            "nya"
        ]
    },
    {
        key: "にぃ",
        origins: [
            "nyi"
        ]
    },
    {
        key: "にゅ",
        origins: [
            "nyu"
        ]
    },
    {
        key: "にぇ",
        origins: [
            "nyu"
        ]
    },
    {
        key: "にょ",
        origins: [
            "nyu"
        ]
    },
    {
        key: "ひゃ",
        origins: [
            "hya"
        ]
    },
    {
        key: "ひぃ",
        origins: [
            "hyi"
        ]
    },
    {
        key: "ひゅ",
        origins: [
            "hyu"
        ]
    },
    {
        key: "ひぇ",
        origins: [
            "hye"
        ]
    },
    {
        key: "ひょ",
        origins: [
            "hyo"
        ]
    },
    {
        key: "みゃ",
        origins: [
            "mya"
        ]
    },
    {
        key: "みぃ",
        origins: [
            "myi"
        ]
    },
    {
        key: "みゅ",
        origins: [
            "myu"
        ]
    },
    {
        key: "みぇ",
        origins: [
            "mye"
        ]
    },
    {
        key: "みょ",
        origins: [
            "myo"
        ]
    },
    {
        key: "りゃ",
        origins: [
            "rya"
        ]
    },
    {
        key: "りぃ",
        origins: [
            "ryi"
        ]
    },
    {
        key: "りゅ",
        origins: [
            "ryu"
        ]
    },
    {
        key: "りぇ",
        origins: [
            "rye"
        ]
    },
    {
        key: "りょ",
        origins: [
            "ryo"
        ]
    },
    {
        key: "ふぁ",
        origins: [
            "fa",
            "fwa"
        ]
    },
    {
        key: "ふぃ",
        origins: [
            "fi",
            "fwi",
            "fyi"
        ]
    },
    {
        key: "ふぅ",
        origins: [
            "fwu"
        ]
    },
    {
        key: "ふぇ",
        origins: [
            "fe",
            "fwe",
            "fye"
        ]
    },
    {
        key: "ふぉ",
        origins: [
            "fo",
            "fwo"
        ]
    },
    {
        key: "ふゃ",
        origins: [
            "fya"
        ]
    },
    {
        key: "ふゅ",
        origins: [
            "fyu"
        ]
    },
    {
        key: "ふょ",
        origins: [
            "fyo"
        ]
    },
    {
        key: "ぎゃ",
        origins: [
            "gya"
        ]
    },
    {
        key: "ぎぃ",
        origins: [
            "gyi"
        ]
    },
    {
        key: "ぎゅ",
        origins: [
            "gyu"
        ]
    },
    {
        key: "ぎぇ",
        origins: [
            "gye"
        ]
    },
    {
        key: "ぎょ",
        origins: [
            "gyo"
        ]
    },
    {
        key: "じゃ",
        origins: [
            "zya",
            "ja",
            "jya"
        ]
    },
    {
        key: "じぃ",
        origins: [
            "zyi",
            "jyi"
        ]
    },
    {
        key: "じゅ",
        origins: [
            "zyu",
            "ju",
            "jyu"
        ]
    },
    {
        key: "じぇ",
        origins: [
            "zye",
            "je",
            "jye"
        ]
    },
    {
        key: "じょ",
        origins: [
            "zyo",
            "jo",
            "jyo"
        ]
    },
    {
        key: "ぢゃ",
        origins: [
            "dya"
        ]
    },
    {
        key: "ぢぃ",
        origins: [
            "dyi"
        ]
    },
    {
        key: "ぢゅ",
        origins: [
            "dyu"
        ]
    },
    {
        key: "ぢぇ",
        origins: [
            "dye"
        ]
    },
    {
        key: "ぢょ",
        origins: [
            "dyo"
        ]
    },
    {
        key: "びゃ",
        origins: [
            "bya"
        ]
    },
    {
        key: "びぃ",
        origins: [
            "byi"
        ]
    },
    {
        key: "びゅ",
        origins: [
            "byu"
        ]
    },
    {
        key: "びぇ",
        origins: [
            "bye"
        ]
    },
    {
        key: "びょ",
        origins: [
            "byo"
        ]
    },
    {
        key: "ぴゃ",
        origins: [
            "pya"
        ]
    },
    {
        key: "ぴぃ",
        origins: [
            "pyi"
        ]
    },
    {
        key: "ぴゅ",
        origins: [
            "pyu"
        ]
    },
    {
        key: "ぴぇ",
        origins: [
            "pye"
        ]
    },
    {
        key: "ぴょ",
        origins: [
            "pyo"
        ]
    },
    {
        key: "ゔぁ",
        origins: [
            "va"
        ]
    },
    {
        key: "ゔぃ",
        origins: [
            "vi",
            "vyi"
        ]
    },
    {
        key: "ゔぇ",
        origins: [
            "ve",
            "vye"
        ]
    },
    {
        key: "ゔぉ",
        origins: [
            "vo"
        ]
    },
    {
        key: "ゔゃ",
        origins: [
            "vya"
        ]
    },
    {
        key: "ゔゅ",
        origins: [
            "vyu"
        ]
    },
    {
        key: "ゔょ",
        origins: [
            "vyo"
        ]
    },
    {
        key: "でゃ",
        origins: [
            "dha"
        ]
    },
    {
        key: "でぃ",
        origins: [
            "dhi"
        ]
    },
    {
        key: "でゅ",
        origins: [
            "dhu"
        ]
    },
    {
        key: "でぇ",
        origins: [
            "dhe"
        ]
    },
    {
        key: "でょ",
        origins: [
            "dho"
        ]
    },
    {
        key: "どぁ",
        origins: [
            "dwa"
        ]
    },
    {
        key: "どぃ",
        origins: [
            "dwi"
        ]
    },
    {
        key: "どぅ",
        origins: [
            "dwu"
        ]
    },
    {
        key: "どぇ",
        origins: [
            "dwe"
        ]
    },
    {
        key: "どぉ",
        origins: [
            "dwo"
        ]
    }
];
let keyConfigs = KEY_CONFIGS;
const hiraganaToRomans = (hiraganas, configs)=>{
    keyConfigs = configs ?? KEY_CONFIGS;
    const startRoman = new Roman('');
    addNextChilds(hiraganas, startRoman);
    return startRoman;
};
const addNextChilds = (remainingHiraganas, parentRoman, duplicateFirstLetter)=>{
    if (!remainingHiraganas) {
        return;
    }
    if (remainingHiraganas.startsWith('っ')) {
        const nextHiraganas = remainingHiraganas.slice(1);
        addNextChilds(nextHiraganas, parentRoman, true);
    }
    if (isArrowOneNInput(remainingHiraganas)) {
        const nextRoman = new Roman('n');
        parentRoman.addChild(nextRoman);
        const nextHiraganas1 = remainingHiraganas.slice(1);
        addNextChilds(nextHiraganas1, nextRoman, false);
    }
    const matchKeyConfigs = keyConfigs.filter((keyConfig)=>remainingHiraganas.startsWith(keyConfig.key));
    matchKeyConfigs.forEach((matchKeyConfig)=>{
        matchKeyConfig.origins.forEach((origin)=>{
            const nextRoman = duplicateFirstLetter ? new Roman(origin[0] + origin) : new Roman(origin);
            parentRoman.addChild(nextRoman);
            const nextHiraganas = remainingHiraganas.slice(matchKeyConfig.key.length);
            addNextChilds(nextHiraganas, nextRoman);
        });
    });
};
const isArrowOneNInput = (remainingHiraganas)=>{
    if (!remainingHiraganas.startsWith('ん')) {
        return false;
    }
    const nextHiraganas = remainingHiraganas.slice(1);
    if (!nextHiraganas) return false;
    const matchKeyConfigs = keyConfigs.filter((keyConfig)=>nextHiraganas.startsWith(keyConfig.key));
    return !matchKeyConfigs.some((matchKeyConfig)=>matchKeyConfig.origins.some((origin)=>origin.startsWith('n')));
};
class Roman {
    roma;
    childs = [];
    parent;
    constructor(roma){
        this.roma = roma;
    }
    addChild(roman) {
        this.childs.push(roman);
        roman.parent = this;
    }
}
const hiraganaToRomas = (hiraganas, configs = KEY_CONFIGS)=>{
    const roman = hiraganaToRomans(hiraganas, configs);
    const answers = makeAnswers(roman);
    return answers;
};
const makeAnswers = (roman, answers)=>{
    if (!answers) {
        answers = [];
    }
    roman.childs.forEach((child)=>{
        makeAnswers(child, answers);
    });
    if (roman.childs.length === 0) {
        makeRomas(roman, '', answers);
    }
    return answers;
};
const makeRomas = (roman, roma, answers)=>{
    roma = roman.roma + roma;
    if (roman.parent) {
        makeRomas(roman.parent, roma, answers);
    } else {
        answers.push(roma);
    }
};
class GameParser {
    options;
    roman;
    answers;
    _inputedRoma = '';
    get inputedRoma() {
        return this._inputedRoma;
    }
    get notInputedRoma() {
        const answer = this.answers.find((answer)=>answer.startsWith(this._inputedRoma));
        if (answer) {
            return answer.replace(this._inputedRoma, '');
        }
        return answer ?? '';
    }
    constructor(options){
        this.options = options;
        this.roman = hiraganaToRomans(options.hiraganas, options.configs);
        this.answers = makeAnswers(this.roman).sort((a, b)=>{
            return a.length - b.length;
        });
    }
    input = (__char)=>{
        const newInputedString = `${this._inputedRoma}${__char}`;
        const canInput = this.answers.some((answer)=>answer.startsWith(newInputedString));
        if (canInput) {
            this._inputedRoma = newInputedString;
        }
        return canInput;
    };
    isComplete = ()=>{
        return this.answers.some((answer)=>answer === this._inputedRoma);
    };
}
export { hiraganaToRomas as hiraganaToRomas };
export { GameParser as GameParser };
export { KEY_CONFIGS as KEY_CONFIGS };

