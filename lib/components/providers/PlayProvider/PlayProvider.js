"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayProvider = exports.PlayContext = void 0;
var react_1 = __importStar(require("react"));
exports.PlayContext = (0, react_1.createContext)(null);
/**
 * 再生 / 停止の状態を管理
 * @param param0
 * @returns
 */
var PlayProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(false), play = _b[0], setPlay = _b[1];
    return (react_1.default.createElement(exports.PlayContext.Provider, { value: { play: play, setPlay: setPlay } }, children));
};
exports.PlayProvider = PlayProvider;
//# sourceMappingURL=PlayProvider.js.map