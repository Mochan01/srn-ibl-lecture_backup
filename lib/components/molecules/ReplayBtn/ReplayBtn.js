"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplayBtn = void 0;
var react_1 = __importDefault(require("react"));
var MiniBtn_1 = require("../../atoms/MiniBtn/MiniBtn");
var ReplayBtn = function (_a) {
    var _b = _a.active, active = _b === void 0 ? false : _b, _c = _a.onClick, onClick = _c === void 0 ? function () { } : _c;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("link", { rel: "preload", href: MiniBtn_1.MINI_BUTTON_MUTATIONS.AGAIN_ON, as: "image" }),
        react_1.default.createElement("link", { rel: "preload", href: MiniBtn_1.MINI_BUTTON_MUTATIONS.AGAIN_OFF, as: "image" }),
        react_1.default.createElement(MiniBtn_1.MiniBtn, { onClick: onClick, caption: "\u3082\u3046\u4E00\u5EA6", mutation: active
                ? MiniBtn_1.MINI_BUTTON_MUTATIONS.AGAIN_ON
                : MiniBtn_1.MINI_BUTTON_MUTATIONS.AGAIN_OFF })));
};
exports.ReplayBtn = ReplayBtn;
//# sourceMappingURL=ReplayBtn.js.map