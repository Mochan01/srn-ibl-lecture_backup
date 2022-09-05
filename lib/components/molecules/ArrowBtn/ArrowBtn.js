"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowBtn = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var MiniBtn_1 = require("../../atoms/MiniBtn/MiniBtn");
var Main = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
var ArrowBtn = function (_a) {
    var id = _a.id, $dir = _a.$dir;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("link", { rel: "preload", href: MiniBtn_1.MINI_BUTTON_MUTATIONS.NEXT_ON, as: "image" }),
        react_1.default.createElement("link", { rel: "preload", href: MiniBtn_1.MINI_BUTTON_MUTATIONS.NEXT_OFF, as: "image" }),
        react_1.default.createElement(Main, { id: id },
            $dir === "next" &&
                react_1.default.createElement(MiniBtn_1.MiniBtn, { caption: "\u6B21\u30DA\u30FC\u30B8", mutation: MiniBtn_1.MINI_BUTTON_MUTATIONS.NEXT_ON }),
            $dir === "prev" &&
                react_1.default.createElement(MiniBtn_1.MiniBtn, { caption: "\u524D\u30DA\u30FC\u30B8", mutation: MiniBtn_1.MINI_BUTTON_MUTATIONS.PREVIOUS_ON }))));
};
exports.ArrowBtn = ArrowBtn;
var templateObject_1;
//# sourceMappingURL=ArrowBtn.js.map