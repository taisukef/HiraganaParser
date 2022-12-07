import { KeyConfigs } from "./parser.interface.js";
/**
 * Romanのツリー構造を返す
 */
export declare const hiraganaToRomans: (hiraganas: string, configs?: KeyConfigs) => Roman;
export declare class Roman {
    roma: string;
    childs: Roman[];
    parent: Roman | undefined;
    constructor(roma: string);
    addChild(roman: Roman): void;
}
//# sourceMappingURL=parser.d.ts.map